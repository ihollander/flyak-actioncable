class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :price
      t.belongs_to :user, foreign_key: true
      t.belongs_to :seat, foreign_key: true

      t.timestamps
    end
  end
end
