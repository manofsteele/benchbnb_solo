class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login_user(@user)
      render json: ["Logged in!"]
    else
      render json: ["Invalid credentials"]
    end

  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      errors = ["No current user"]
      render json: errors, status: 404
    end

  end

end
