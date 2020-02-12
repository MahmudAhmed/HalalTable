class ChangePriceTypeOnResturatns < ActiveRecord::Migration[5.2]
  def change
      change_column :restaurants, :price_range, :string, null: false
  end
end
