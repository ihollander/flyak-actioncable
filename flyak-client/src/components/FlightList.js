import React from "react";
import FlightListItem from "./FlightListItem";

import adapter from "../api/adapter";

class FlightList extends React.Component {
  state = {
    loading: true,
    flights: []
  };

  componentDidMount() {
    adapter.getFlights().then(flights => {
      this.setState({
        flights,
        loading: false
      });
    });
  }

  handleFlightClick = id => this.props.history.push(`/flights/${id}`);

  renderFlights() {
    return this.state.flights.map(flight => (
      <FlightListItem
        key={flight.id}
        flight={flight}
        handleClick={this.handleFlightClick}
      />
    ));
  }

  render() {
    const { loading } = this.state;

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Flights</h1>
          {loading ? (
            <h1 className="title">Loading...</h1>
          ) : (
            this.renderFlights()
          )}
        </div>
      </section>
    );
  }
}

export default FlightList;
