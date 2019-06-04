# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(discord_username: "Test", email: "Test@test.test", password: "starwars")

Server.create(server_name: "Test_Server", server_admin_id: 1, public: true, invite_key: "test")

Channel.create(channel_name: "Test_Channel", server_id: 1)