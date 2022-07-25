import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/Slide10.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={20} md={2}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={200} md={9}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
              As a software engineering student and a curious person with an ever-growing commitment to knowledge and science, 
              I have worked on several projects in many areas of computer science, from software engineering and distributed computing to artificial intelligence and computer security.
              I am someone who thrives on challenges along with a great team spirit.
              <blockquote class="otro-blockquote">
              
              Alone we can do so little; together we can do so much.
              <span>Helen Keller</span>
              </blockquote>
              
              <br></br>
              <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1wvudG_pPlhfMU7XIX-r6TXmy85jLQgIa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/KhalilThabet" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.quora.com/profile/Khalil-Thabet" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Quora
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/khalil-thabet/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;