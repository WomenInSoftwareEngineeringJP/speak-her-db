class CreateSpeakers < ActiveRecord::Migration[6.0]
  def change
    create_table :speakers do |t|
      t.string :name_en
      t.string :name_ja
      t.string :pronoun
      t.string :city
      t.string :job_title
      t.string :company
      t.string :secondary_affiliation
      t.string :speaker_bio
      t.string :twitter_url
      t.string :website_url
      t.string :facebook_url
      t.belongs_to :location

      t.timestamps
    end
  end
end
