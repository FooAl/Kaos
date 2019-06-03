class Api::MessagesController < ApplicationController
    def index
        @messages = Message.find(:all)
        render :index
    end
end