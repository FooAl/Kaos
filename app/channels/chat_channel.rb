class ChatChannel < ApplicationCable::Channel
    def subscribed
        # debugger
        server_id = Channel.find(params[:channel_id]).server
        socket = {type: "users", server_id: server_id}
        ChatChannel.broadcast_to(params[:channel_id], socket)
        stream_for params[:channel_id]
        
    end

    def speak(data)
        message = Message.create(content: data['message'], 
                                    user_id: data['user_id'], channel_id: data['channel_id'])
                                    
        socket = {id: message.id, content: message.content, 
                    user_id: message.user_id, channel_id: message.channel_id,
                    created_at: message.created_at, 
                    updated_at: message.updated_at,
                    type: "message"
                }
        ChatChannel.broadcast_to(message.channel_id, socket)
    end


    def unsubscribed
    end
end 