class CreateSpeakers < ActiveRecord::Migration[6.0]
  def change
    create_table :speakers do |t|
      t.string :name_en
      t.string :name_ja
      t.string :pronouns
      t.string :email
      t.string :city
      t.belongs_to :location
      t.string :job_title
      t.string :company
      t.string :secondary_title
      t.string :secondary_affiliation
      t.string :speaker_bio
      t.string :twitter_url
      t.string :website_url
      t.string :facebook_url
      t.string :photo_url
      t.string :linkedin_url
      t.string :prior_presentation_url
      t.string :submitter_name
      t.string :submitter_email
      t.string :admin_notes
      t.boolean :consent, default: true
      t.boolean :published, default: false

      t.timestamps
    end
  end
end
