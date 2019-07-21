# Flights
codes = [
  "TVC",
  "LGA",
  "JFK",
  "LAX",
  "ORD",
  "SFO",
  "PWM",
  "DTW",
  "MSP",
  "AUS"
]

15.times do 
  depart_from = codes.sample
  remaining_codes = codes - [depart_from]
  arrive_at = remaining_codes.sample
  departure = Time.at(((Time.now.to_f + (60 * 60 * 24 * 365)) - Time.now.to_f)*rand + Time.now.to_f)
  duration = rand(45..500)
  rows = rand(15..26)
  seats_per_row = [4,6,8].sample
  Flight.create(depart_from: depart_from, arrive_at: arrive_at, departure: departure, duration: duration, rows: rows, seats_per_row: seats_per_row)
end

# Seats
Flight.all.each do |flight|
  sort = 0
  flight.rows.times do |row|
    flight.seats_per_row.times do |seat|
      seat_number = "#{(row + 1)}#{(seat + 65).chr}"
      flight.seats.create(sort: sort, number: seat_number, price: rand(5..15) * rand(43..53) + rand().round(2))
      sort += 1
    end
  end
end

# Users
30.times do
  User.create(name: Faker::Name.unique.name, budget: rand(10..40) * 50)
end

# Tickets
User.all.each do |user|
  5.times do
    seat = Seat.order('RANDOM()').first
    user.tickets.create(seat: seat)
  end
end