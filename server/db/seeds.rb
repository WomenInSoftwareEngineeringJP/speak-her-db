# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def self.create_languages
  puts 'Creating languages...'
  file_text = File.read(Rails.root + 'db/languages.json')
  # Known issue: eval is a security risk. Couldn't make JSON.parse work here...
  array = eval(file_text)
  array.each do |obj|
    language = Language.find_or_initialize(name: obj[:name])
    language.update_attributes!(obj)
  end
end

def self.create_topics
  puts 'Creating topics...'
  file_text = File.read(Rails.root + 'db/topics.json')
  # Known issue: eval is a security risk. Couldn't make JSON.parse work here...
  array = eval(file_text)
  array.each do |obj|
    topic = Topic.find_or_initialize(name: obj[:name])
    topic.update_attributes!(obj)
  end
end

def self.create_locations
  puts 'Creating locations...'
  file_text = File.read(Rails.root + 'db/locations.json')
  # Known issue: eval is a security risk. Couldn't make JSON.parse work here...
  array = eval(file_text)
  array.each do |obj|
    location = Location.find_or_initialize(prefecture: obj[:prefecture])
    location.update_attributes!(obj)
  end
end

create_languages
create_topics
create_locations
