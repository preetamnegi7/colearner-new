import React from 'react';
import '../../App.css'
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Welcome to Colearners',
    content: 'We at ‘Colearners’ are striving towards a common goal of promoting and democratizing learning.'
    
  },
  
]

function AppHero() {
  return (
    <div id="home" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h2 className="h2">{item.title}</h2>
                <h3 className="h3">{item.content}</h3>

                                 
                  
                
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
