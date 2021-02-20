require 'test_helper'

class SpokenLanguagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get spoken_languages_path, headers: { "accept": 'application/json' }
    assert_response :success
  end

  test 'index returns a list of spoken_languages' do
    spoken_languages_hash = spoken_languages.map do |topic|
      {
        id: topic.id,
        name: topic.name,
        name_ja: topic.name_ja
      }
    end
    expected_response = JSON.parse(spoken_languages_hash.to_json)

    get spoken_languages_path, headers: { "accept": 'application/json' }
    res = JSON.parse(response.body)
    assert_equal(res.to_set, expected_response.to_set)
  end

end
