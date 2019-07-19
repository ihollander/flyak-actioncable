# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

f1 = Flight.create(depart_from: "LGA", arrive_at: "TVC", departure: "2019-08-07 10:00:00", duration: 99)
f2 = Flight.create(depart_from: "TVC", arrive_at: "LGA", departure: "2019-08-15 17:40:00", duration: 123)
f3 = Flight.create(depart_from: "JFK", arrive_at: "SFO", departure: "2019-12-17 08:00:00", duration: 347)
f4 = Flight.create(depart_from: "SFO", arrive_at: "JFK", departure: "2019-12-26 10:00:00", duration: 487)

SEAT_MAP = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F"
}

20.times do |i|
  6.times do |r|
    letter = SEAT_MAP[r.to_sym]
    number = i
    seat = number + letter
  end
end