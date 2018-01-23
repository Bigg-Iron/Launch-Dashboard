import React from 'react'
import { connect } from 'dva'
import classnames from 'classnames'
import { Row, Col, Card, Icon, Button, Input, Form, Select, AutoComplete, Tooltip, Cascader, Checkbox } from 'antd'
import styles from './profile.less'

const imgAvatar = require('../../assets/img/logo.png')

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option

const residences = [{
  value: 'San Diego',
  label: 'USA',
  children: [{
    value: 'San Diego',
    label: 'CA',
    children: [{
      value: 'San Diego',
      label: 'San Diego'
    }]
  }]
}, {
  value: 'San Diego',
  label: 'CA',
  children: [{
    value: 'San Diego',
    label: 'CA',
    children: [{
      value: 'San Diego',
      label: 'CA'
    }]
  }]
}]

class Profile extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('The passwords do not match');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '1'
    })(
      <Select style={{ width: 60 }}>
        <Option value='1'>+1</Option>
      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

    return (
      <div>
        <Row className={styles.showcase}>
          <Col xs={24} sm={24} md={12} lg={15} xl={15}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                <h4><Icon type='user' /></h4>
              </div>}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label='E-mail'

                >
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: 'The input is not valid E-mail!'
                    }, {
                      required: true, message: 'Please input your E-mail!'
                    }]
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Password'

                >
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: 'Please input your password!'
                    }, {
                      validator: this.checkConfirm
                    }]
                  })(
                    <Input type='password' />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Confirm Password'

                >
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: 'Please confirm your password!'
                    }, {
                      validator: this.checkPassword
                    }]
                  })(
                    <Input type='password' onBlur={this.handleConfirmBlur} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                      Nickname&nbsp;
                      <Tooltip title='What do you want to be called?'>
                        <Icon type='question-circle-o' />
                      </Tooltip>
                    </span>
                  )}

                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }]
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Habitual Residence'
                >
                  {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: 'Please select your residence!' }]
                  })(
                    <Cascader options={residences} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Phone Number'
                >
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }]
                  })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Website'
                >
                  {getFieldDecorator('website', {
                    rules: [{ required: true, message: 'Please input website!' }]
                  })(
                    <AutoComplete
                      dataSource={websiteOptions}
                      onChange={this.handleWebsiteChange}
                      placeholder='website'
                    >
                      <Input />
                    </AutoComplete>
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                  {getFieldDecorator('agreement', {
                    valuePropName: 'checked'
                  })(
                    <Checkbox>I have read the <a href=''>terms and conditions</a></Checkbox>
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type='primary' htmlType='submit'>Update Profile</Button>
                  {' '}
                  <Button type='primary' style={{ marginLeft: 8 }} onClick={this.handleReset}>
                    Reset
                  </Button>
                </FormItem>
              </Form>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={1} lg={1} xl={1} style={{ marginTop: 60 }} />
          <Col xs={24} sm={24} md={11} lg={8} xl={8}>
            <Card
              bordered={false}
              noHovering
              title={<div className={styles['card-avatar']}>
                <a><img className={styles.img} src={imgAvatar} /></a>
              </div>}>
              <div className={styles['card-content']}>
                <h6> Launch Box </h6>
                <h4> Admin</h4>
                <p>
                   I love you like Kanye loves Kanye.
                </p>
                <a>
                  <Button type='primary'>FOLLOW</Button>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const ProfileForm = Form.create()(Profile)

export default ProfileForm
