class Api::RestaurantsController < ApplicationController
  def index
    debugger
    if params[:filters]
      if params[:filters][:city] 
        @restaurants = params[:filters][:city] == "All" ? 
        Restaurant
          .includes(:reviews).all :  
        Restaurant
          .includes(:reviews)
          .where(city: params[:filters][:city])
      else 
        @restaurants = Restaurant.includes(:reviews).all
      end

      if params[:filters][:price]
        @restaurants = @restaurants.where(:price_range => params[:filters][:price])
      end

      if params[:filters][:cuisines]
            @restaurants = @restaurants.where(:cuisines => params[:filters][:cuisines])
      end
      if params[:filters][:rating]
        debugger
            @restaurants = @restaurants.where("ratings >= ?", params[:filters][:rating])
      end

    else
      @restaurants = Restaurant.includes(:reviews).all
    end
    render :index
  end

  def show 
    @restaurant = Restaurant.find(params[:id])
    render :show
  end


end
