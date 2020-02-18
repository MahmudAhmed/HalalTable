class AddColumnToReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :special_request, :string
  end
end
