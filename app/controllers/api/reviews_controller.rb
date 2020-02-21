class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(restaurant_id: params[:restaurant_id]).includes(:user => [:reviews] )
    render :index
  end

  def create 
    @review = Review.new(review_params)
    @review.restaurant_id = params[:restaurant_id]
    @review.user_id = current_user.id

    if @review.save 
      @review.restaurant.average_ratings
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update 
    @review = Review.find(params[:id])
   
    if @review.user_id == current_user.id && @review.update(review_params)
      @review.restaurant.average_ratings
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.user_id == current_user.id
      @review.destroy
    else 
      render json: ["You can only delete your own review"], status: 422
    end
  end



  private

  def review_params
    params.require(:review).permit(:overall, :food, :service, :ambience, :body)
  end


end
