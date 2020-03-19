# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  phone_number   :string           not null
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  zip            :string           not null
#  website        :string
#  description    :text             not null
#  open_time      :time             not null
#  close_time     :time             not null
#  price_range    :string           not null
#  capacity       :integer          not null
#  cuisines       :string           not null
#  owner_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :phone_number, :street_address, :city, 
    :state, :zip, :description, :open_time, :close_time, 
      :price_range, :capacity, :cuisines, presence: true
  validates :street_address, uniqueness: true
  validates :lat, uniqueness: { scope: :lng}
  has_many_attached :photos
  has_one_attached :main_photo

  belongs_to :owner, 
    class_name: :User,
    foreign_key: :owner_id

  has_one :menu

  has_many :reviews

  has_many :favorites

  has_many :reservations

  def average_ratings
    self.update!(ratings: self.reviews.average(:overall).to_f)
  end

  def self.in_bounds(bounds)
    ne_lat = bounds[:northEast][:lat].to_f
    ne_lng = bounds[:northEast][:lng].to_f
    sw_lat = bounds[:southWest][:lat].to_f
    sw_lng = bounds[:southWest][:lng].to_f

    Restaurant.where("lat between ? AND ? AND lng between ? AND ?", sw_lat, ne_lat,sw_lng, ne_lng)
 
  end
  
end

 
