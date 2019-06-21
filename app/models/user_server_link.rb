class UserServerLink < ApplicationRecord
    belongs_to :user
    belongs_to :server

    attr_accessor :first_channel

    def find_first_channel_id
        # debugger
        return self.server.channels[0].id
    end

end