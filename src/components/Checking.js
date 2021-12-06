import React from "react";
import ticket1 from "../images/checking/ticket1.png"
import ticket2 from "../images/checking/ticket2.png"
import ticket3 from "../images/checking/ticket3.png"
import ticket4 from "../images/checking/ticket4.png"
import ticket5 from "../images/checking/ticket5.png"
import ticket6 from "../images/checking/ticket6.png"
import ticket7 from "../images/checking/ticket7.png"
import ticket8 from "../images/checking/ticket8.png"
import ticket9 from "../images/checking/ticket9.png"
import ticket10 from "../images/checking/ticket10.png"


function Checking() {
  return (
    <div className="wrap">
		<div className="container">
			<div className="tickets">
				<img src={ticket1} className="ticket" alt="ticket"></img>
				<img src={ticket2} className="ticket" alt="ticket"></img>
				<img src={ticket3} className="ticket" alt="ticket"></img>
				<img src={ticket4} className="ticket" alt="ticket"></img>
				<img src={ticket5} className="ticket" alt="ticket"></img>
				<img src={ticket6} className="ticket" alt="ticket"></img>
				<img src={ticket7} className="ticket" alt="ticket"></img>
				<img src={ticket8} className="ticket" alt="ticket"></img>
				<img src={ticket9} className="ticket" alt="ticket"></img>
				<img src={ticket10} className="ticket" alt="ticket"></img>
				
			</div>
		</div>
    </div>
  );
}
export default Checking;