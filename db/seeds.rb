# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "Seeding"

puts "User"
User.create(username: 'Richard', bio: 'I Want Food', profile_picture: "https://image.shutterstock.com/image-illustration/october-12-2020-caricature-albert-600w-1831427257.jpg", password: "1234567")
User.create(username: 'Demon', bio: 'I Want Food', profile_picture:Faker::Avatar.image, password: "1234567")
User.create(username: "Bob", bio: Faker::Quote.famous_last_words, profile_picture:Faker::Avatar.image, password:"1234567" )
User.create(username: "Apple", bio: Faker::Quote.famous_last_words, profile_picture:"https://www.bt.com/content/dam/bt/portal/images/articles/tv/tv-kids-apple-onion-2.jpg", password:"1234567" )




Post.create(text: 'Fireflies light up to attract a mate. To do this, the fireflies contain specialized cells in their abdomen that make light. The cells contain a chemical called luciferin and make an enzyme called luciferase. To make light, the luciferin combines with oxygen to form an inactive molecule called oxyluciferin.', user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)

# (user_id:User.all.sample.id)

10.times do
    Post.create(text: Faker::Lorem.paragraph, user_id:User.all.sample.id)
end

puts "Done Seeding"


