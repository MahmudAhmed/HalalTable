class AddAmbience < ActiveRecord::Migration[5.2]
  def change
        add_column :reviews, :ambience, :integer, null: false

  end
end
