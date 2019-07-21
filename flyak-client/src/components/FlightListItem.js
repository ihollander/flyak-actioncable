import React from "react";
import { formatDate, formatTime, getDuration } from "../helpers/datetime";

const FlightListItem = ({ flight, handleClick }) => {
  return (
    <li className="box media">
      <div className="media-left">
        <h5>{formatDate(flight.departure)}</h5>
      </div>
      <div className="media-content">
        <div className="content">
          <h3>
            {flight.depart_from} - {flight.arrive_at}
          </h3>
          <p>
            Departing at {formatTime(flight.departure)} | Arriving at{" "}
            {formatTime(flight.arrival)}
          </p>
          <p className="has-text-grey">
            Flight Duration: {getDuration(flight.departure, flight.arrival)}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <button
                onClick={() => handleClick(flight.id)}
                className="button is-primary"
              >
                Buy Tickets
              </button>
            </div>
            <div className="level-item">
              <span className="tag">
                {flight.total_seats - flight.seats_sold} Seats Remaining
              </span>
            </div>
          </div>
        </nav>
      </div>
    </li>
  );
};

export default FlightListItem;
