# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(email: "user1@ht.com", first_name: "Pablo", last_name: "Escobar", primary_location: "Queens", password: "fireball42")
User.create!(email: "user2@ht.com", first_name: "Tony", last_name: "Montana", primary_location: "Brooklyn", password: "fireball42")
User.create!(email: "user3@ht.com", first_name: "Al", last_name: "Capone", primary_location: "NYC/Manhattan", password: "fireball42")
User.create!(email: "user4@ht.com", first_name: "El", last_name: "Chapo", primary_location: "Bronx", password: "fireball42")
User.create!(email: "user5@ht.com", first_name: "Fat", last_name: "Tony", primary_location: "Staten Island", password: "fireball42")
User.create!(email: "user6@ht.com", first_name: "Jon", last_name: "Gotti", primary_location: "Long Island", password: "fireball42")
User.create!(email: "demo@ht.com", first_name: "Demo", last_name: "User", primary_location: "Queens", password: "fireball42")