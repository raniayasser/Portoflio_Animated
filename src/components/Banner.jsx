import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, UsbDrive } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //   setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      //   setIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portoflio.</span>
            <h1>
              {`Hi I'm Rania, `} <span className="wrab">{text}</span>
            </h1>
            <p>
              I'm a Frontend Web Developer specializing in creating visually
              stunning and user-friendly websites. With a passion for clean code
              and responsive design, I bring expertise in HTML, CSS, JavaScript,
              Bootstrap and React to every project.
            </p>
            <a href="#connect" style={{ textDecoration: "none" }}>
              <button>
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="headder" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
