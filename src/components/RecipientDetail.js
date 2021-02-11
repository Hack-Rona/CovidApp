// import React, { useState, useEffect, Component } from "react";
// import Seniors from "./Seniors";

// function RecipientDetail() {
//   const [helps, setHelps] = useState();

//   useEffect(() => {
//     fetch("localhost:8000/volunteers/").then((response) =>
//       response.json().then((data) => {
//         setHelps(data.helps);
//       })
//     );
//   }, []);

//   return (
//     <div>
//       <h3>Recipient Details</h3>

//       <Helps helps={helps} />
//     </div>
//   );
// }

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       city: "",
//       zipCode: "",
//       phoneNumber: "",
//       email: "",
//       method: "",
//       reason: "",
//     };
//   }

// return (
//           <div className="Recipient">
//               <h3>RecipientDetails</h3>
//               <Recipient helps={helps}/>
//           </div>
//       )

//   }
// export default RecipientDetail;
