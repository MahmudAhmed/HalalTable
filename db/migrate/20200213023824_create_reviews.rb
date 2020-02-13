class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambiance, null: false
      t.text :body, null: false
      t.index :restaurant_id
      t.index :user_id

      t.timestamps
    end
  end
end
