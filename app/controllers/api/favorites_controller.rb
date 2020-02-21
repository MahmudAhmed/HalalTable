class Api::FavoritesController < ApplicationController
  def index 
    @favorites = Favorite.where(user_id: params[:user_id])
    render :index
  end

  def create 
    @favorite = Favorite.new(favorites_params)
    @favorite.user_id = current_user.id

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.user_id == current_user.id
      @favorite.destroy
    else 
      render json: ["You havent added this restaurant to your favorite list yet"], status: 422
    end
  end

  def favorites_params 
    params.require(:favorite).permit(:restaurant_id)
  end
end
