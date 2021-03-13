class AddSpeakerTopics < ActiveRecord::Migration[6.0]
  def change
    create_join_table :speakers, :topics do |t|
      t.index :speaker_id
      t.index :topic_id
    end
  end
end
