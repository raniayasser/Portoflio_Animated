import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from '../assets/img/color-sharp2.png'
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("projectsData.json").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Pariatur
              placeat fugiat atque! Quisquam nihil consectetur error itaque
              nisi, aliquam iure quam magni, veritatis accusantium ut illum
              rerum, temporibus eaque doloremque!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first" >All</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="reactt">React</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="jsss">JavaScript</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="htmlcss">HTML5 + CSS3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <Col sm={12} md={4} size={12}>
                          <div className="proj-imgbx">
                            <a href={project.link}>
                              <img src={project.img} alt="..." />
                            </a>
                            <div className="proj-txtx">
                              <h4> {project.title}</h4>
                              <span>{project.description}</span>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="reactt">
                  <Row>
                    {projects.map((project) => {
                      return project.id === "react" ? (
                        <Col sm={12} md={4} size={12}>
                          <div className="proj-imgbx">
                            <a href={project.link}>
                              <img src={project.img} alt="..." />
                            </a>
                            <div className="proj-txtx">
                              <h4> {project.title}</h4>
                              <span>{project.description}</span>
                            </div>
                          </div>
                        </Col>
                      ) : (
                        console.log("notfounded")
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="jsss">
                  <Row>
                    {projects.map((project) => {
                      return project.id === "js" ? (
                        <Col sm={12} md={4} size={12}>
                          <div className="proj-imgbx">
                            <a href={project.link}>
                              <img src={project.img} alt="..." />
                            </a>
                            <div className="proj-txtx">
                              <h4> {project.title}</h4>
                              <span>{project.description}</span>
                            </div>
                          </div>
                        </Col>
                      ) : (
                        console.log("notfounded")
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="htmlcss">
                  <Row>
                    {projects.map((project) => {
                      return project.id === "hc" ? (
                        <Col sm={12} md={4} size={12}>
                          <div className="proj-imgbx">
                            <a href={project.link}>
                              <img src={project.img} alt="..." />
                            </a>
                            <div className="proj-txtx">
                              <h4> {project.title}</h4>
                              <span>{project.description}</span>
                            </div>
                          </div>
                        </Col>
                      ) : (
                        console.log("notfounded")
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
