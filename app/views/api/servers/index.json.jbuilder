@server_links.each do |server_link|
    json.set! server_link.server.id do
        json.extract! server_link.server, :id, :server_name
    end
end
