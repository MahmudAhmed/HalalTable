class ChangeambianceToAmbiance < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :ambiance
    # add_column :reviews, :ambience, :string, null: false
  end
end
