class Seat < ApplicationRecord
  belongs_to :flight
  has_one :ticket
end
