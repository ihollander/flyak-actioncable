import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import Modal from "./Modal";
import TicketForm from "./TicketForm";
import SeatGrid from "./SeatGrid";

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

  getRows() {
    const { seats, seats_per_row } = this.state.flight;
    return arrayToTwoD(seats, seats_per_row);
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
            <SeatGrid
              rows={this.getRows()}
              setSelectedSeat={this.setSelectedSeat}
            />
          </div>
        </section>
        <ActionCableConsumer
          channel={{ channel: "FlightChannel", flight_id: flight.id }}
          onReceived={data => {
            console.log(data);
            if (data.type === "SEAT_PURCHASED") {
              this.handleTicketBought(data.payload);
            }
          }}
        />
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
