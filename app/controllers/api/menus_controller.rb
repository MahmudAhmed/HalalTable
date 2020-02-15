class Api::MenusController < ApplicationController
  def index
    @menu = Menu.find_by(restaurant_id: params[:restaurant_id])
    render :show
  end
end
