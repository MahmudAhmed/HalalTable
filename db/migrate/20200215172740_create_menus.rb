class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.integer :restaurant_id, null: false
      t.string :item_1, null: false
      t.string :item_2, null: false
      t.string :item_3
      t.string :item_4
      t.string :item_5
      t.string :item_6
      t.index :restaurant_id, unique:true
      t.timestamps
    end
  end
end
