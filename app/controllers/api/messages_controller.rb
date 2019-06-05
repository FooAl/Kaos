class Api::MessagesController < ApplicationController
    def index
        # debugger
        @messages = Message.where(channel_id: params[:channel_id])
        render :index
    end
end