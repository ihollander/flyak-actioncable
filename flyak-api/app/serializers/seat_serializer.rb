class SeatSerializer < ActiveModel::Serializer
  attributes :id, :number, :status, :price
end
