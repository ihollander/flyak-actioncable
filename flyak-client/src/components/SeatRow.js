import React from "react";

const Seat = ({ seat, setSelectedSeat }) => {
  return (
    <div className="column">
      {seat.status === "available" ? (
        <button
          onClick={() => setSelectedSeat(seat.id)}
          className="button is-fullwidth is-primary"
        >
          {seat.number}
        </button>
      ) : (
        <button className="button is-fullwidth is-danger">{seat.number}</button>
      )}
    </div>
  );
};

export default Seat;
