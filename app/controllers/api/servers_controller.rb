class Api::ServersController < ApplicationController
    def index
        if params[:isPublic] == "true"
            @isPublic = true
        else
            @isPublic = false
        end
        @server_links = UserServerLink.where(user_id: params[:sessionID])
        @users = {}
        @server_links.each do |server_link| 
            server_link.server.find_first_channel_id
            @users[server_link.server.id] = server_link.server.users
        end
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end

    def create
        # debugger
        @server = Server.new(server_params)
        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def edit
        @server = Server.find(params[:id])
        if @server.update_attributes(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
    end

    private

    def server_params
        params.require(:server).permit(:server_name, :server_admin_id, :invite_key, :public)
    end
end