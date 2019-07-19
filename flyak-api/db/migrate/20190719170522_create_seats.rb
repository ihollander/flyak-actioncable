class CreateSeats < ActiveRecord::Migration[5.2]
  def change
    create_table :seats do |t|
      t.string :number
      t.belongs_to :flight, foreign_key: true

      t.timestamps
    end
  end
end
