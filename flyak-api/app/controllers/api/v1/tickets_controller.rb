class Api::V1::TicketsController < ApplicationController
  def create
    seat = Seat.find_by(id: params[:seat_id])
    if seat.ticket
      render json: { error: "Seat not available" }, status: :bad_request
    else
      ticket = Ticket.create(user_id: params[:user_id], seat_id: params[:seat_id])
      if ticket
        FlightChannel.broadcast_to(seat.flight, { type: "SEAT_PURCHASED", payload: SeatSerializer.new(ticket.seat) })
        render json: ticket.seat, status: :created
      else
        render json: { error: "Error buying seat" }, status: :bad_request
      end
    end
  end
end
