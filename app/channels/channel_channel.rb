class ChannelChannel < ApplicationCable::Channel
    def subscribed
        stream_for ""
    end

    def speak(data)
        channel = Channel.create()
        # socket = 
    end

    def unsbscribed
    end
end