class Api::SessionsController < ApplicationController

    def create
        
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            
            login!(@user)
            render "api/users/show"
        else
            if User.find_by(email: params[:user][:email])
                render json: 'Password does not match', status: 401
            else
                render json: 'Email does not exist', status: 401
            end
        end
    end

    def destroy
        
        if logged_in?
        
            logout
            render json: {}
        else
        
            render json: ["No user to log out"], status: 404
        end
    end

end