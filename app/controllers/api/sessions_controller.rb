class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:discord_username], params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show"
        else
            # render json: { error: ['invalid inputs']}, status 401
        end
    end

    def destroy
        logout
        #redirect to root
    end

end