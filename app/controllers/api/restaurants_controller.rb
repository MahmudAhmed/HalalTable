class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show 
    @restaurant = Restaurant.find(params[:id])
    render :show
  end


end
