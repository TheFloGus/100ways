import React from "react";
import ticket1 from "../images/Ticket/ticket1.png"
import ticket2 from "../images/Ticket/ticket2.png"
import ticket3 from "../images/Ticket/ticket3.png"
import ticket4 from "../images/Ticket/ticket4.png"
import ticket5 from "../images/Ticket/ticket5.png"
import ticket6 from "../images/Ticket/ticket6.png"
import ticket7 from "../images/Ticket/ticket7.png"
import ticket8 from "../images/Ticket/ticket8.png"
import ticket9 from "../images/Ticket/ticket9.png"
import ticket10 from "../images/Ticket/ticket10.png"


function Ticket() {
  return (
    <div className="tiket__wrap">
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
export default Ticket;