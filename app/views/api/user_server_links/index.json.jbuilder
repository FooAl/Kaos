json.server_users do
    @links.each do |link|
        json.extract! link, :user_id
    end
end