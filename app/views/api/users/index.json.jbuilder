@users.each do |user|
    json.set! user.id do
        json.extract! user, :discord_username, :id, :profile_icon_url
    end
end
