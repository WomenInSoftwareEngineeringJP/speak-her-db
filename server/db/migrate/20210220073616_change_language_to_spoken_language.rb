class ChangeLanguageToSpokenLanguage < ActiveRecord::Migration[6.0]
  def change
    rename_table :languages, :spoken_languages
  end
end
