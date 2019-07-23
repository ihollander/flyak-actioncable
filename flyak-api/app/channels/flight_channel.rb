class FlightChannel < ApplicationCable::Channel
  def subscribed
    flight = Flight.find_by(id: params[:flight_id])
    stream_for flight
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
