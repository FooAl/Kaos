class Api::ChannelsController < ApplicationController
    def index
        @channel = Channel.all
        render :index
    end

    def show
        @channel = Channel.find(params[:channel][:id])
        render :show
    end
end