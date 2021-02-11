import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Carousel from "./components/Carousel";
import CarouselData from "./components/CarouselData";
import Navie from "./Navie";
import Footer from "./Footer";
import "./components/Carousel.css";
import "./Home.css";
import womanClipboard from "./images/womanClipboard.svg";

function Home(props) {
  return (
    <div>
      <Navie path="/navbar" component={Navie} />
      <div>
        <Carousel slides={CarouselData} />
      </div>
      <div className="imgContainer">
        <img src={womanClipboard} className="ladyImage" />
        <div className="info">
          <h5>
            Over 44 million vaccine doses have been administered so far, so
            what's stopping you?
          </h5>
        </div>
        <div className="linkDiv">
          <button className="linkButton1" href="/senior">
            I need help with vaccine registration
          </button>
          <br />
          <button className="linkButton2" href="/volunteer">
            I want to volunteer
          </button>
        </div>
      </div>
      <div>
        <h5 className="test">Testimonials</h5>
        <br />
        <h5 className="testP">
          "I couldn't sit through all the information that my doctor was giving
          me. I needed help on all these different sites."
        </h5>

        <p className="name">-Susan R.</p>
        <br />
        <p className="outcome">
          Susan received help setting up her appointment for her vaccine. Her
          volunteer was Maria L.
        </p>
      </div>
      <Footer path="/footer" component={Footer} />
    </div>
  );
}

export default Home;
