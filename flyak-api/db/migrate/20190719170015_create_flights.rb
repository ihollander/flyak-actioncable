class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :depart_from
      t.string :arrive_at
      t.datetime :departure
      t.integer :duration
      t.integer :rows
      t.integer :seats_per_row

      t.timestamps
    end
  end
end
