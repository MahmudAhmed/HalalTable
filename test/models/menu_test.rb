# == Schema Information
#
# Table name: menus
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  item_1        :string           not null
#  item_2        :string           not null
#  item_3        :string
#  item_4        :string
#  item_5        :string
#  item_6        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class MenuTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
