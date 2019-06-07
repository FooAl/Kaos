    @links.each do |link|
        json.set! link.server_id do
            json.set! link.user_id do
                json.extract! link, :user_id, :server_id, :id
            
            end
        end
    end
