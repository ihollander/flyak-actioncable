class FlightSerializer < ActiveModel::Serializer
  attributes :id, :depart_from, :arrive_at, :departure, :arrival, :seats_sold, :total_seats, :seats_per_row

  has_many :seats

  def seats
    object.seats.order("sort")
  end
end