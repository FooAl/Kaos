class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:discord_username], params[:password])
        if @user
            login!(@user)
            # render some sort of me page, "api/users/show"
        else
            # render json: { error: ['invalid inputs']}, status 401
        end
    end

    def destroy
        logout
        #redirect to root
    end

end