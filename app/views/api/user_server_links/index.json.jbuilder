json.server_users do
    debugger
    @links.each do |link|
        json.extract! link, :user_id
    end
end