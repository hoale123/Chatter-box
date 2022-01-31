# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.create(name:"Heater", review:"Very hot!", location:"Atlanta", image:"https://media.istockphoto.com/photos/electric-heater-picture-id506856980")

Restaurant.create(name:"Heater", description:"Very hot!", location:"Atlanta", image:"https://media.istockphoto.com/photos/electric-heater-picture-id506856980")

User.create(username: 'Richard', bio: 'I Want Food', profile_picture: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/5/5b/Richard_watterson_gumball_2014.png/revision/latest?cb=20171004232626", password: "1234567")