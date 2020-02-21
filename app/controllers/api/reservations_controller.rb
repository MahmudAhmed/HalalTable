class Api::ReservationsController < ApplicationController
  
  def index 
    @reservations = Reservation.where(user_id: current_user.id) 
    render :index
  end

  def show 
    @reservation = Reservation.find(params[:id]) 
    render :show 
  end 

  def create 
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id

    if @reservation.save 
      render :show 
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update

    @reservation = Reservation.find(params[:id])
    @reservation.user_id = current_user.id

    if @reservation.user_id == current_user.id && @reservation.update(reservation_params) 
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def delete 
    @reservation = Review.find(params[:id])
    if @reservation.user_id == current_user.id
      @reservation.destroy
    else 
      render json: ["You can only cancel your own reservation"], status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:party_size, :status, :date, :time, :special_request, :restaurant_id)
  end

end
