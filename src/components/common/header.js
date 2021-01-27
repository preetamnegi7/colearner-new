import React, { useState } from 'react';
import colearnersLogo from "../../assets/images/Colearners.png"
import { Anchor, Drawer, Button } from 'antd';
import "../../App.css"

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <a href="http://colearners.in"> <img className="img" src={colearnersLogo} alt="Colearners"/></a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#home" title="Home" />
            <Link href="#services" title="Our Services" />
            <Link href="#industries" title="Industries We Serve" />
            <Link href="#team" title="Team" />                      
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#services" title="Our Services" />
              <Link href="#industries" title="Industries We Serve" />
              <Link href="#team" title="Team" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
