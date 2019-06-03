class ChatChannel < ApplicationCable::Channel
    def subscribed
        stream_for "chat_channel"
    end

    def speak(data)
        message = Message.create(content: data['message'], 
                                    user_id: data['user_id'], channel_id: 1)
                                    
        socket = {id: message.id, content: message.content, 
                    user_id: message.user_id, channel_id: message.channel_id,
                    created_at: message.created_at, 
                    updated_at: message.updated_at,
                    type: "message"
                }
        ChatChannel.broadcast_to("chat_channel", socket)
    end

    def unsubscribed
    end
end 