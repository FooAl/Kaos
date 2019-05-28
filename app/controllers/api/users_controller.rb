class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
            #redirect to me page
        else
            # render json: @users.errors.full_messages, status 401
        end
    end

    def edit
        @user = User.find(params[:user][:id])
        if @user.update_attributes(user_params)
            #redirect to show
        else
            # render json: @users.errors.full_messages, status 401
        end
    end

    def show
        @user = User.find(params[:user][:id])
        #render show info
    end

    private

    def user_params
        params(:user).permit(:discord_username, :email, :password, :profile_icon_url)
    end

end