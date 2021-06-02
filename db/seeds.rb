# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all

Restaurant.create(name: 'AppleBees', about: 'Good')
Restaurant.create(name: 'Betos', about: 'Very Good')
Restaurant.create(name: "Mo'Bethas", about: 'The Best')
Restaurant.create(name: "Olive Garden", about: 'Sweet')
Restaurant.create(name: "Outback Steak House", about: 'Chewy')

puts "seeded #{Restaurant.all.size}"