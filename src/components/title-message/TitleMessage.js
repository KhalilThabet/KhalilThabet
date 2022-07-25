import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./Title.css";
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  
  strong {
    font-size: 1.5em;
    font-weight: bold;
  }
  div {
    text-shadow: 0px 0px 20px rgba(0, 0, 0);
    font-weight: 15;
    padding:15px;
    .main {
      color: white;
      font-size: 23px;
    }
    .main1{
      color:white;
      font-size:18px;
      text-align: justify;
      text-justify: inter-word;

    }
    .sub {
      color :red;
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            <div >
            <strong>Welcome Visitor !  I am , Khalil👋</strong>
            <br/>
            </div>
            <div className = "main1">
            I'm currently a final year computer Engineering student at the National School of Computer Science of Manouba, Tunisia, graduating in August, 2023. Scroll down to find out more about me and my projects.
            </div>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Software Engineer Student", "Researcher", "Problem Solver"],
                autoStart: true,
                loop: true,
                delay: 40
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  