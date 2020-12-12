class CreateLanguages < ActiveRecord::Migration[6.0]
  def change
    create_table :languages do |t|
      t.string :name_en
      t.string :name_ja

      t.timestamps
    end
  end
end
