class Api::RestaurantsController < ApplicationController
  def index
    if params[:filters]
      if params[:filters][:bounds] 
        @restaurants = Restaurant.in_bounds(params[:filters][:bounds])
      elsif params[:filters][:city] 
        @restaurants = params[:filters][:city] == ["All"] ? 
        Restaurant
          .all
          .includes(:reviews):  
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
