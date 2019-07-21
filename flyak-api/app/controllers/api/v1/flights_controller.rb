class Api::V1::FlightsController < ApplicationController
  def index
    flights = Flight.all.order(:departure)
    render json: flights, each_serializer: FlightListSerializer
  end

  def show
    flight = Flight.find_by(id: params[:id])
    render json: flight
  end
end
