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

  has_many_attached :photos

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
  
end



#  name: "Addy’s Barbeque",
#  phone_number: "(718) 433-9568",
#  street_address: "30-94 Steinway St",
#  city: "Astoria",
#  state: "NY",
#  zip: "11103",
#  website: nil,
#  description: "Addy's Barbeque is a halal barbeque fusion with chef experience ranging from Africa to Asia, and Europe to America. Fresh food all the way with very affordable prices and a unique diverse menu. We welcome all to come enjoy an unforgettable experience with friendly staff and managers. We pride in our service and quality to give hospitality a whole new perspective. Tasty food that will make you want more. Please do join us so we can share our wonderful cuisine with you.",
#  open_time: 12:00,
#  close_time: 22:00,
#  price_range: "$$",
#  capacity: 30,
#  cuisines: "Barbeque",
#  owner_id: 
 
