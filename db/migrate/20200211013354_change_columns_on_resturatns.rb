class ChangeColumnsOnResturatns < ActiveRecord::Migration[5.2]
  def change 
    change_column :restaurants, :open_time, :time, null: false
    change_column :restaurants, :close_time, :time, null: false
    change_column :restaurants, :website, :string, null: true
  end
end
