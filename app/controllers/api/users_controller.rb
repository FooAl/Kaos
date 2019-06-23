class Api::UsersController < ApplicationController

    def index
        if params[:username][:type] == "find_by_name"
            @user = User.find_by_username(params[:username][:discord_username])
            if @user
                render :show
            else
                render json: "User does not exist", status: 401
            end
        else
            @users = User.all
            render :index
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def edit
        @user = User.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:discord_username, :email, :password, :profile_icon_url)
    end

end