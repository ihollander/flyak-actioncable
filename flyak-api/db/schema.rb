# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_19_170553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: :cascade do |t|
    t.string "depart_from"
    t.string "arrive_at"
    t.datetime "departure"
    t.integer "duration"
    t.integer "rows"
    t.integer "seats_per_row"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seats", force: :cascade do |t|
    t.integer "sort"
    t.string "number"
    t.bigint "flight_id"
    t.float "price"
    t.integer "status", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_seats_on_flight_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "seat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["seat_id"], name: "index_tickets_on_seat_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "seats", "flights"
  add_foreign_key "tickets", "seats"
  add_foreign_key "tickets", "users"
end
