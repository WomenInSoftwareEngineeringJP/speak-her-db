class SpokenLanguagesController < ApplicationController
  def index
    @spoken_languages = SpokenLanguage.all
  end
end
