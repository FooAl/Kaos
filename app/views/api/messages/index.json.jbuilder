@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :content, :user_id, :created_at, :updated_at
    end
end