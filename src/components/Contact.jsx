import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert(" message send sucessfully! ");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ocoyaz",
        "template_f855bxb",
        form.current,
        "QiASNvHZJqpnzsZmS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="connect" className="contact">
      <Container>
        <Row>
          <Col size={12} sm={12} md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col size={12} sm={12} md={6}>
            <h2> Get In Touch</h2>

            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={12} md={6}>
                  <input
                    type="text"
                    name="f-name"
                    placeholder="First Name"
                    required
                  />
                </Col>
                <Col size={12} sm={12} md={6}>
                  <input type="text" name="l-name" placeholder="Last Name" />
                </Col>
                <Col size={12} sm={12} md={6}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Eamil Address"
                    required
                  />
                </Col>
                <Col size={12} sm={12} className="px-1" md={6}>
                  <input type="tel" name="phone" placeholder="Phone No." />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    name="message"
                    placeholder="Enter your Message"
                    required
                  />
                  <button type="submit"> Send</button>
                    {/* <input type="submit" value="Send"  /> */}

        
                 
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
