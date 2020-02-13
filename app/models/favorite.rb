# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  
  belongs_to :restaurant

  belongs_to :user

end
