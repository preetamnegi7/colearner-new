import React from 'react';
import "../../App.css"
import image1 from '../../assets/images/Automobiles.jpg';
import image2 from '../../assets/images/Agriculture.png';
import image3 from '../../assets/images/Power, Oil And Energy.jpg';
import image4 from '../../assets/images/Manufacturing.jpg';
import image5 from '../../assets/images/Food and Processing.jpg';
import image6 from '../../assets/images/Beauty & Wellness.jpg';
import image7 from '../../assets/images/FMCG.jpg';
import image8 from '../../assets/images/Audio and Video.jpg';
import image9 from '../../assets/images/Healthcare & Pharmaceuticals.jpg';
import image10 from '../../assets/images/Education.jpg';
import image11 from '../../assets/images/Software.jpg';
import image12 from '../../assets/images/Telecommunication.jpg';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;



function AppPricing() {
  return (
    <div id="industries" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Industries We Serve</h2>
          
        </div>
        
         
      <Row gutter={[16, 16]} className="ro">
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Automobiles" src={image1} />}
              >
              <Meta title="Automobiles" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Agriculture" src={image2} />}
              >
              <Meta title="Agriculture" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Power, Oil and Energy" src={image3} />}
              >
              <Meta title="Power, Oil and Energy" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Manufacturing and Machineries" src={image4} />}
              >
              <Meta title="Manufacturing and Machineries" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Food and Processing" src={image5} />}
              >
              <Meta title="Food and Processing" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Beauty & Wellness" src={image6} />}
              >
              <Meta title="Beauty & Wellness" />
            </Card>
          </Col>




          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="FMCG/Retail" src={image7} />}
              >
              <Meta title="FMCG/Retail" />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="BFSI" src={image8} />}
              >
              <Meta title="BFSI" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Healthcare & Pharmaceuticals" src={image9} />}
              >
              <Meta title="Healthcare & Pharmaceuticals" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Education" src={image10} />}
              >
              <Meta title="Education" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Software" src={image11} />}
              >
              <Meta title="Software" />
            </Card>
          </Col>


          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <Card
              hoverable
              cover={<img alt="Telecommunication" src={image12} />}
              >
              <Meta title="Telecommunication" />
            </Card>
          </Col>
        </Row>
      </div>
     
              </div>
  );
}

export default AppPricing;
