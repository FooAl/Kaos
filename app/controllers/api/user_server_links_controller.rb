class Api::UserServerLinksController < ApplicationController

    def create
        @link = UserServerLink.new(user_id: params[:link][:user_id], server_id: params[:link][:server_id])
        @link.save
    end

    def destroy
       @link = UserServerLink.find(params[:id])
       @link.destroy
    end

    def index
        @links = UserServerLink.where(server_id: params[:server_id])
        render :index
    end

    private
    def join_params
        params.require(:user_server_link).permit(:user_id, :server_id)
    end

end