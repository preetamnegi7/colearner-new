import React from 'react';
import "../../App.css"
import image1 from '../../assets/images/Custom Learning.png';
import image2 from '../../assets/images/Rapid Authoring.jpg';
import image3 from '../../assets/images/Localization.png';
import image4 from '../../assets/images/Online Training and Tutoring.jpg';
import image5 from '../../assets/images/Game Based Learning.jpg';
import image6 from '../../assets/images/Mobile Learning.jpg';
import image7 from '../../assets/images/L & D Consulting.jpg';
import image8 from '../../assets/images/Audio and Video.jpg';
import image9 from '../../assets/images/HTML Services.jpg';
import image10 from '../../assets/images/Story Boarding.jpg';
import image11 from '../../assets/images/Assessment Based Learning.jpg';
import image12 from '../../assets/images/School Curriculum Design.jpg';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="services" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Our Services</h2>
          <p>'Colearners media and technology division', an independent unit, works for companies, colleges, institutes and hospitals for developing animations, websites, presentations materials and training content. 'Colearners' has a strong internal as well as external team of subject experts, instructional designers, quality experts, animators, illustrators and designers. The technical team at 'Colearners' can work on different authoring tools, platforms as well as software.</p>
         
        </div>
        <Row gutter={[16, 16]} className="ro">
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Custom Learning" src={image1} />}
            >
              <Meta title="Custom Learning" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Rapid Authoring" src={image2} />}
            >
              <Meta title="Rapid Authoring" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Localization" src={image3} />}
            >
              <Meta title="Localization" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Online Training and Tutoring" src={image4} />}
            >
              <Meta title="Online Training and Tutoring" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Game Based Learning" src={image5} />}
            >
              <Meta title="Game Based Learning" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Mobile Learning" src={image6} />}
            >
              <Meta title="Mobile Learning" />
            </Card>
          </Col>




          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="L and D Consulting" src={image7} />}
            >
              <Meta title="L and D Consulting" />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Audio and Video" src={image8} />}
            >
              <Meta title="Audio and Video" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="HTML Services" src={image9} />}
            >
              <Meta title="HTML Services" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Instructional Design and Story Boarding" src={image10} />}
            >
              <Meta title="Story Boarding" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Assessment Based Learning" src={image11} />}
            >
              <Meta title="Assessment Based Learning" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="School Curriculum Design" src={image12} />}
            >
              <Meta title="School Curriculum Design" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
