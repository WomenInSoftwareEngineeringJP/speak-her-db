namespace :mock do
  desc 'Seeds the database with mock speakers'
  task :speakers => :environment do
    puts 'Creating mock speakers...'
    file_text = File.read(Rails.root + 'lib/tasks/speakers.json')
    # Known issue: eval is a security risk. Couldn't make JSON.parse work here...
    array = eval(file_text)
    array.each do |obj|
      attributes = obj.reject { |key, _| key.in? %i[topics languages location_id] }
      speaker = Speaker.where(attributes).first_or_create

      speaker.location = Location.find_by(prefecture: obj[:location_id])

      obj[:languages].split(',').each do |language|
        speaker.spoken_languages << SpokenLanguage.find_by(name: language)
      end

      obj[:topics].split(',').each do |topic|
        speaker.topics << Topic.find_by(name: topic)
      end
      speaker.save!
    end
  end
end
