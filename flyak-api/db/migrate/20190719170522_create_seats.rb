class CreateSeats < ActiveRecord::Migration[5.2]
  def change
    create_table :seats do |t|
      t.integer :sort
      t.string :number
      t.belongs_to :flight, foreign_key: true
      t.float :price
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
