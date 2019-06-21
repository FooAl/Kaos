@server_links.each do |server_link|
    
    json.set! server_link.server.id do
        
        debugger
        if @isPublic == true && server_link.server.public == true
            json.extract! server_link.server, :id, :server_name, :public
        elsif @isPublic == false && server_link.server.public == false
            # json.extract! server_link.server, :id, :server_name, :public

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
