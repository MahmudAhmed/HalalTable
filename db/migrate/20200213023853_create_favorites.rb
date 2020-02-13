class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.index :restaurant_id
      t.index :user_id

      t.timestamps
    end
  end
end
