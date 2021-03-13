require 'test_helper'

class TopicsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get topics_path, headers: { "accept": 'application/json' }
    assert_response :success
  end

  test 'index returns a list of topics' do
    topics_hash = topics.map do |topic|
      {
        id: topic.id,
        name: topic.name,
        name_ja: topic.name_ja
      }
    end
    expected_response = JSON.parse(topics_hash.to_json)

    get topics_path, headers: { "accept": 'application/json' }
    res = JSON.parse(response.body)
    assert_equal(res.to_set, expected_response.to_set)
  end
end

