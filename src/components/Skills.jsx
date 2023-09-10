import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS3</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
