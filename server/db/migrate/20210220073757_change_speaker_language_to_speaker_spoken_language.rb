class ChangeSpeakerLanguageToSpeakerSpokenLanguage < ActiveRecord::Migration[6.0]
  def change
    rename_column :languages_speakers, :language_id, :spoken_language_id
    rename_table :languages_speakers, :speakers_spoken_languages
  end
end
