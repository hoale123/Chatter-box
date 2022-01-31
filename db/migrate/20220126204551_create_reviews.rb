class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :review
      t.string :image
      t.string :location
      t.timestamps
    end
  end
end
