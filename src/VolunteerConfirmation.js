import React from "react";
import volconfirm from "./images/volunteerconfirm.svg";
import Navie from "./Navie";
import Footer from "./Footer";

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
      <RecipientDetail />
      <Footer path="/footer" component={Footer} />
    </div>
  );
}

export default VolunteerConfirmation;
