import React from "react";
import volconfirm from "./images/volunteerconfirm.svg";
import Navie from "./Navie";
import Footer from "./Footer";
import RecipientDetail from "./components/RecipientDetail";
import "./components/Carousel.css";

function VolunteerConfirmation() {
  return (
    <div>
      <Navie path="/navbar" component={Navie} />
      <div>
        <img src={volconfirm}></img>
        <h2>
          We appreciate the desire to volunteer with people who really need you!
        </h2>
        <p>
          Here are the details about who you’ll be helping. Please try reaching
          out within 1-3 days, using their preferred contact method.
        </p>
        <p>Thank you!!!</p>
      </div>
      <div>
        <h3 className="underline">Recipient Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Maria Flores</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>Los Angeles</td>
            </tr>
            <tr>
              <td>ZIP:</td>
              <td>98115</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>818-225-3546</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>Mflores@aol.com</td>
            </tr>
            <tr>
              <td>Preferred contact:</td>
              <td>Phone</td>
            </tr>
          </tbody>
        </table>
        <h3>What they asked for:</h3>
        <p>I need help setting up a vaccination</p>
      </div>
      <Footer path="/footer" component={Footer} />
    </div>
  );
}

export default VolunteerConfirmation;
