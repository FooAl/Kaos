class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.where(server_id: params[:server_id])
        render :index
    end

    def show
        @channel = Channel.find(params[:id])
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

    def edit
        @channel = Channel.find(params[:id])
        if @channel.update_attributes(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end


    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
    end

    private

    def channel_params
        params.require(:channel).permit(:channel_name, :server_id, :public)
    end

end