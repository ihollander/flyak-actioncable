class FlightListSerializer < ActiveModel::Serializer
  attributes :id, :depart_from, :arrive_at, :departure, :arrival, :seats_sold, :total_seats
end