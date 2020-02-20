class ChangeIntegerToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :ratings, :float
  end
end
