class AddSpeakerLanguages < ActiveRecord::Migration[6.0]
  def change
    create_join_table :speakers, :languages do |t|
      t.index :speaker_id
      t.index :language_id
    end
  end
end
