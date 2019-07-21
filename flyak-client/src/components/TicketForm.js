import React from "react";

import adapter from "../api/adapter";

const TicketForm = ({ user, seat, handleTicketBought }) => {
  const handleBuyTicket = () => {
    const ticketData = {
      user_id: user.id,
      seat_id: seat.id
    };

    adapter
      .buyTicket(ticketData)
      .then(seat => {
        handleTicketBought(seat);
      })
      .catch(errorResponse => {
        errorResponse.then(message => alert(message.error)).catch(console.warn);
      });
  };

  return (
    <div className="content">
      <h3>Seat {seat.number}</h3>
      <h4>Price: ${seat.price.toFixed(2)}</h4>
      <button onClick={handleBuyTicket} className="button is-primary">
        Confirm Purchase
      </button>
    </div>
  );
};

export default TicketForm;
