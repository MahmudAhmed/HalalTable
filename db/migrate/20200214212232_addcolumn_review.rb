class AddcolumnReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :value, :integer
  end
end
