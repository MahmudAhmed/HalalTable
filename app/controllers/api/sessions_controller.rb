class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user.nil?
      render json: ['Your email and password don\'t match. Please try again.'], status: 401
    else
      login(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if current_user 
      logout!
      render json: {}
    else
      render json: { message: 'Not Logged In At The Moment.' }, status: 404
    end
  end


end
