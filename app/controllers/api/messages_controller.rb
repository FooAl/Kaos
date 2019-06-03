class Api::MessagesController < ApplicationController
    def show
        @messages = Message.find(:all, limit: 50)
        render :show
    end
end