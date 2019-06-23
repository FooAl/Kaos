@server_links.each do |server_link|
    
    json.set! server_link.server.id do
        if @isPublic == true && server_link.server.public == true
            json.extract! server_link.server, :id, :server_name, :public
        elsif @isPublic == false && server_link.server.public == false
            json.set! :users do
                json.set! :user_1, @users[server_link.server.id][0].discord_username
                json.set! :user_2, @users[server_link.server.id][1].discord_username
            end          
            json.extract! server_link.server, :id, :server_name, :public, :first_channel_id

        end
    end
end

# @server_links.each do |server_link|
#     json.set! server_link.server.id do
        
#         if @isPublic == false && server_link.server.public == false
#             json.extract! server_link.server.channels[0], :id
#         end
#     end
# end
