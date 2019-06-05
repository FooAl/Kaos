json.messages do
    @messages.each do |message|
        json.set! message.id do
            json.extract! message, :id, :content, :user_id, :created_at, :updated_at
        end
    end
end

json.users do
    @messages.each do |message|
        json.set! message.user_id do
            json.partial! "api/users/user", user: message.user
        end
    end
end

json.channels do
    json.set! @messages.first.channel_id do
        json.partial! "api/channels/channel", channel: @messages.first.channel
    end    
end