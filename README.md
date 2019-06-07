# **Kaos**

Kaos is a Discord clone providing a platform for text chat between multiple users, mostly built in the span of 10 days. It uses the Javascript libraries React and Redux for the frontend, and Ruby on Rails and postgreSQL for the backend. To maintain a live chat, it utilizess Rail's Action Cables to create websockets.

## Features

### User Authentification
* Users are able to create, log in, and log out of accounts
* Users are unable to access session forms if they already are logged in
* Users are unable to access the chat portions of the app if they aren't logged in

### Servers
* Users can join and leave Servers
* Users can access Servers they've joined
* Users can create Servers, which assigns the User who created it as the server admin
* Users can rename Servers
* Users can access an invite key which they can give to invite other users in

### Channels
* Users can create Channels inside the Server
* Users can edit a Channel's name
* Users can join Channels to access it's Chatroom

### Chatrooms
* Each Channel has access to a unique Chatroom
* Users can chat in real time inside a Chatroom

## Potential Features
* Custom nicknames for Users per Server
* User list of each User on a Server
* User roles
