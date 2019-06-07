# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(discord_username: "krawlingKaos", email: "krawling@kaos.com", password: "starwars")
User.create(discord_username: "lurkingFear", email: "lurking@fear.com", password: "starwars")

Server.create(server_name: "KaosServer", server_admin_id: 1, public: true)
Server.create(server_name: "Sanctuary", server_admin_id: 1, public: true)

Channel.create(channel_name: "General", server_id: 1)
Channel.create(channel_name: "Welcome", server_id: 1)
Channel.create(channel_name: "Secret Channel", server_id: 2)

Message.create(content: "This is my server, wahaha", user_id: 1, channel_id: 1)
Message.create(content: "I'm lurking in your safe space", user_id: 2, channel_id: 1)
Message.create(content: "oh no", user_id: 1, channel_id: 1)
Message.create(content: "My name is kaos and I'm the krawling one", user_id: 1, channel_id: 2)
Message.create(content: "I'm the lurking one and none will escape", user_id: 2, channel_id: 2)
Message.create(content: "No one can find me here", user_id: 1, channel_id: 3)

UserServerLink.create(user_id: 1, server_id: 1)
UserServerLink.create(user_id: 2, server_id: 1)
UserServerLink.create(user_id: 1, server_id: 2)