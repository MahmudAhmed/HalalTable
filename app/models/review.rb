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

class Review < ApplicationRecord
  validates :body, presence: true
  validates :overall, :food, :service, :ambience, :inclusion => { :in => 0..5 }
  validates :user_id, uniqueness: { scope: :restaurant_id, message: "already reviewed this restaurant" }
  after_validation
  belongs_to :restaurant
  belongs_to :user


end

