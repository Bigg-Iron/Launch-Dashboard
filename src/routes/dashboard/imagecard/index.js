import React from 'react'
import { Row, Col, Card, Icon } from 'antd'
import styles from './imagecard.less'
// import Launch from './launch'
import axios from "axios";

class ImageCard extends React.Component {
  state = {launches: [] };

  getLaunches(){
    axios.get('https://launchlibrary.net/1.3/launch/2018-01-27?next=30')
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
        {/* <Launch /> */}
        <Row gutter={32} className={styles.showcase}>
          {
              launches && launches.map((v, k) => {
                return (
                  <Col xs={12} sm={12} md={12} lg={8} xl={8} key={k} style={{ marginBottom: 50 }}>
                    <Card
                      bordered={false}
                      noHovering>
                      <div className={styles['card-header']}>
                        <img src= {v.rocket.imageURL || "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png"} width = "300" alt="" />
                      </div>
                      <div className={styles['card-content']}>
                        <h4>{v.name}</h4>
                        <p>{v.missions.descriptions}</p>
                      </div>
                      <div className={styles['card-footer']}>
                        <h4>{v.id}</h4>
                        <div className={styles.position}>
                          <Icon type='environment' />{' '}{v.position}
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
