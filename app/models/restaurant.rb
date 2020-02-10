# class Restaurant < ApplicationRecord
#   validates :name, :phone_number, :street_address, :city, 
#     :state, :zip, :website, :description, :open_time, :close_time, 
#       :price_range, :capacity, :owner_id, :cuisines, presence: true
#   validates :street_address, uniqueness: true
#   validates :phone_number, length: { is: 10 }, numericality: { only_integer: true }
# end


#  name: "Bait n Hook",
#  phone_number: nil,
#  street_address: nil,
#  city: nil,
#  state: nil,
#  zip: nil,
#  website: nil,
#  description: nil,
#  open_time: nil,
#  close_time: nil,
#  price_range: nil,
#  capacity: nil,
#  cuisines: nil,
#  owner_id: nil,
#  created_at: nil,
#  updated_at: nil