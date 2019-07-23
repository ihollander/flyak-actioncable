import React from "react";
import Seat from "./SeatRow";

const SeatGrid = ({ rows, setSelectedSeat }) => {
  return rows.map(row => (
    <div key={row[0].id} className="columns">
      {row.map(seat => (
        <Seat key={seat.id} seat={seat} setSelectedSeat={setSelectedSeat} />
      ))}
    </div>
  ));
};

export default SeatGrid;
