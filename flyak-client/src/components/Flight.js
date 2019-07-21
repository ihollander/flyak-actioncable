import React from "react";
import Modal from "./Modal";
import TicketForm from "./TicketForm";

import adapter from "../api/adapter";
import { arrayToTwoD } from "../helpers/array";

class Flight extends React.Component {
  state = {
    loading: true,
    flight: null,
    selectedSeatId: null
  };

  setSelectedSeat = selectedSeatId => this.setState({ selectedSeatId });

  getSelectedSeat() {
    return this.state.flight.seats.find(
      seat => seat.id === this.state.selectedSeatId
    );
  }

  handleTicketBought = updatedSeat => {
    const updatedSeats = this.state.flight.seats.map(seat =>
      seat.id === updatedSeat.id ? updatedSeat : seat
    );
    this.setState({
      flight: {
        ...this.state.flight,
        seats: updatedSeats
      },
      selectedSeatId: null
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    adapter.getFlight(id).then(flight => {
      this.setState({
        flight,
        loading: false
      });
    });
  }

  renderSeats() {
    const { seats, seats_per_row } = this.state.flight;
    const columns = arrayToTwoD(seats, seats_per_row);

    return columns.map(col => (
      <div key={col[0].id} className="columns">
        {col.map(seat => (
          <div key={seat.id} className="column">
            {seat.status === "available" ? (
              <button
                onClick={() => this.setSelectedSeat(seat.id)}
                className="button is-fullwidth is-primary"
              >
                {seat.number}
              </button>
            ) : (
              <button className="button is-fullwidth is-danger">
                {seat.number}
              </button>
            )}
          </div>
        ))}
      </div>
    ));
  }

  render() {
    const { loading, flight } = this.state;
    if (loading) {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title">Loading...</h1>
          </div>
        </section>
      );
    }
    return (
      <>
        <section className="section">
          <div className="container">
            <h1 className="title">
              Flight: {flight.depart_from} - {flight.arrive_at}
            </h1>
            {this.renderSeats()}
          </div>
        </section>
        <Modal
          active={this.state.selectedSeatId !== null}
          closeModal={() => this.setSelectedSeat(null)}
          title="Buy Ticket"
        >
          <TicketForm
            handleTicketBought={this.handleTicketBought}
            seat={this.getSelectedSeat()}
            user={this.props.user}
          />
        </Modal>
      </>
    );
  }
}

export default Flight;
