import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image";

//Css file
import './project.css'

//Projects 
import MedicalPracticeDEMO from "../../assets/img/projects/Medical Practice.gif";
import BeloteDEMO from "../../assets/img/projects/Belote.png";
import GAutoDEMO from "../../assets/img/projects/GAuto.gif";
import PCDDEMO from "../../assets/img/projects/FR.jpg";


//Skills
import L_PYHTON from "../../assets/img/skills/python.svg";
import L_Qt from "../../assets/img/skills/qt.svg";
import L_CPP from "../../assets/img/skills/cpp.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_NODEJS from "../../assets/img/skills/nodejs.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_Tensorflow from "../../assets/img/skills/Tensorflow_logo.svg";
import L_Keras from "../../assets/img/skills/Keras_logo.svg";
import L_OPENCV from "../../assets/img/skills/OpenCV.svg";
import L_PyTorch from "../../assets/img/skills/PyTorch.svg";
import L_Cuda from "../../assets/img/skills/nvidia.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#663399',
  },
  marker: {
    borderColor: '#070d59',
  },
  timelineTrack: {
    backgroundColor: '#663399',
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* //Medical Practice */}
          <ImageEvent
            date="April 2019 - May 2019"
            className="text-center"
            text="Medical Practice"
            src={MedicalPracticeDEMO}
            alt="Medical Practice"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Consists of managing patients in a medical practice by creating a database to manage all various resources, from prescriptions and appointments to dates and times of surgeries.
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYHTON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PYTHON
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-column mt-1">
                <UrlButton
                  href="https://github.com/KhalilThabet/Medical-Practice"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //BCard Game */}

          <ImageEvent
            date="From March 2021 - May 2021"
            className="text-center"
            text="Belote Card Game"
            src={BeloteDEMO}
            alt="Belote Card Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Development of a multiplayer card game using object-oriented programming and integration of a graphical user interface to facilitate the use of the application.
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Qt}
                                alt="Qt"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Qt
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPP}
                                alt="CPP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-column mt-1">
                <UrlButton
                  href="https://github.com/KhalilThabet/BeloteGUIGame"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* GAuto */}

          <ImageEvent
            date="From August 2021 - September 2021"
            className="text-center"
            text="Web Application For The Management Of a Driving School"
            src={GAutoDEMO}
            alt="Web Application For The Management Of a Driving School"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Created with ReactJS and MongoDB to manage and record resource activities through an admin interface, including HR, accounting and financial management, enabling users to access an interactive interface to review their tasks and progress.
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACTJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACTJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODEJS}
                                alt="NODEJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NODEJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="EXPRESS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              EXPRESS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MONGODB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MONGODB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-column mt-1">
                <UrlButton
                  href="https://github.com/KhalilThabet/GAuto"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
          
              </div>
            </div>
          </ImageEvent>

          {/* //FaceRecognition */}

          <ImageEvent
            date="From January 2022 - May 2022"
            className="text-center"
            text="A GPU implementation of a face recognition system"
            src={PCDDEMO}
            alt="A GPU implementation of a face recognition system"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The goal of the project is to develop a 2nd generation neural network for face recognition by turning the theoretical concept into a real-world application. The overall application is implemented on a GPU in order to compare its performance with that of a CPU.
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Tensorflow}
                                alt="Tensorflow"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tensorflow
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Keras}
                                alt="Keras"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Keras
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PyTorch}
                                alt="Torch"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Pytorch
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Cuda}
                                alt="Cuda"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CUDA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPP}
                                alt="C++"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CPP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYHTON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_OPENCV}
                                alt="OPENCV"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              OpenCV
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-column mt-1">
                <UrlButton
                  href="https://github.com/KhalilThabet"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  )
}


export default ProjectTimeline