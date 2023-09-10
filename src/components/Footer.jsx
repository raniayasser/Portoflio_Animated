import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Subscrip from "./Subscrip";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import footerimg from "../assets/img/footer-bg.png";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Subscrip />

          <Col>
            <div>
              <a href="/home">
                <img src={logo} alt="logo-image" />
              </a>
            </div>

            <div className="footerText">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/rania-yasser-mohamed-abb596235/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/raniayasser/">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://github.com/raniayasser/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <div>
                <p>Copyright 2023@ All Rights Reserved</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
