class Seat < ApplicationRecord
  enum status: [:available, :hold, :sold]

  belongs_to :flight
  has_one :ticket

end
