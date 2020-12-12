class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.integer :ord
      t.string :prefecture
      t.string :region

      t.timestamps
    end
  end
end
