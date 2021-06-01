# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create(name: 'AppleBees')
Restaurant.create(name: 'Betos')
Restaurant.create(name: "Mo'Bethas")
Restaurant.create(name: "Olive Garden")
Restaurant.create(name: "Outback Steak House")

puts "seeded #{Restaurant.all.size}"