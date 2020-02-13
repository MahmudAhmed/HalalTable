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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
