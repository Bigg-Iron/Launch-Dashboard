import React from 'react'
import { Row, Col, Card, Icon, Button } from 'antd'
import styles from './imagecard.less'
// import Launch from './launch'
import axios from "axios";
import swal from 'sweetalert2'
import SweetAlert from "../../sweetalert"
import * as sa2css from 'sweetalert2/dist/sweetalert2.min.css'


class ImageCard extends React.Component {
  handleAlert = (props) => {
    swal(props);
  }

  state = {launches: [] };

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=9')
    .then(res => {
      console.log(res.data.launches);
      this.setState({ launches: res.data.launches});
    });
  }

  componentDidMount(){
    this.getLaunches();
  }
  render () {
    const { imagecard } = this.props
    const { launches } = this.state;
    

    return (
      <div>
        <Row gutter={32} className={styles.showcase}>
          {
              launches && launches.map((v, k) => {
                let image = v.rocket.imageURL

               if (image === "Array"){
                image = "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"
                  }
                return (
                  <Col xs={12} sm={12} md={12} lg={8} xl={8} key={k} style={{ marginBottom: 50 }}>
                    <Card
                      bordered={false}
                      noHovering>
                      <div className={styles['card-header']}>
                        <img src= {image} width = "600" height = "400" alt="" />
                      </div>
                      <div className={styles['card-content']}>
                        <h5>{v.name}</h5>
                        <p>{v.missions.descriptions}</p>
                      </div>
                      <div className={styles['card-footer']}>
                        <h5>{v.location.name}</h5>
                        <div className={styles.position}>

                          {/* <SweetAlert /> */}

                          <Icon type='environment' />{' '}{v.position}

                            <Button type='primary' size='default'
                            
                              onClick={() => this.handleAlert(
                              {
                                title: ` ${v.missions[0].name}`,
                                text: ` ${v.missions[0].description}`,
                                width: 600,
                                padding: 100
                              },
                              console.log('Info button clicked'),
                              console.log(v.missions[0].description))}

                              > Info </Button>


                        </div>
                      </div>
                    </Card>
                  </Col>
                )
              })
            }
        </Row>
      </div>
    )
  }
}

ImageCard.propTypes = {}

export default ImageCard
