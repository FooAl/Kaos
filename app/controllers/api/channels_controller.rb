class Api::ChannelsController < ApplicationController
    def index
        @channel = Channel.all
        render :index
    end

    def show
        @channel = Channel.find(params[:channel][:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def delete
        @channel = Channel.find(params[:channel][:id])
        @channel.destroy
    end

    private

    def channel_params
        params.require(:channel).permit(:channel_name, :server_id)
    end

end