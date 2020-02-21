class AddLatLngToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lat, :float, null: false
    add_column :restaurants, :lng, :float, null: false
  end
end
