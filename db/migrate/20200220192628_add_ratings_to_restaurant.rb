class AddRatingsToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :ratings, :integer
  end
end
