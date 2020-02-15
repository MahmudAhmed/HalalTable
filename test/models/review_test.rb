# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  overall       :integer          not null
#  food          :integer          not null
#  service       :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  value         :integer
#  ambience      :integer          not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
