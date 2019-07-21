class Flight < ApplicationRecord
  has_many :seats
  has_many :tickets, through: :seats

  def arrival
    departure + (duration * 60)
  end

  def seats_sold
    tickets.count
  end

  def total_seats
    seats.count
  end

  def sold_out?
    seats_sold == total_seats
  end
end
