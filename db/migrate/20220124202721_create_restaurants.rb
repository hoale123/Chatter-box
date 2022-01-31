class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :location
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
