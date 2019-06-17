class ChannelChannel < ApplicationCable::Channel
    def subscribed
        stream_for "channel_channel"
    end

    def speak(data)

        # socket = 
    end

    def unsbscribed
    end
end