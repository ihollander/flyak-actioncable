class Ticket < ApplicationRecord
  after_commit :update_related, on: :create

  belongs_to :user
  belongs_to :seat

  def update_related
    seat.update(status: :sold)
    user.update(budget: user.budget - seat.price)
  end

end
