class Api::UsersController < ApplicationController
  def create
    @user = User.new(users_param)

    if @user.save
      login(@user)
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

  def users_param
    params.require(:user).permit(:email, :password, :first_name, :last_name, :primary_location)
  end


end
