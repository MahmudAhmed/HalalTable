class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :phone_number, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :website, null: false
      t.text :description, null: false
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.integer :price_range, null: false
      t.integer :capacity, null: false
      t.string :cuisines, null: false
      t.integer :owner_id, null: false

      t.index :street_address, unique: true
      t.index :owner_id

      t.timestamps
    end
  end
end
