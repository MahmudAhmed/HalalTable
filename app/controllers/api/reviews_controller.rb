class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(restaurant_id: params[:restaurant_id]).includes(:user => [:reviews] )
    # debugger
    render :index
  end
end
