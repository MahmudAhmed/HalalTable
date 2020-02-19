class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :status, :string, default: "upcoming"
  end
end
