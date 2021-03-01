require 'test_helper'

class LocationsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get locations_path, headers: { "accept": 'application/json' }
    assert_response :success
  end

  test 'index returns a list of locations' do
    locations_hash = locations.map do |location|
      {
        id: location.id,
        code: location.code,
        prefecture: location.prefecture,
        region: location.region
      }
    end
    expected_response = JSON.parse(locations_hash.to_json)

    get locations_path, headers: { "accept": 'application/json' }
    res = JSON.parse(response.body)
    assert_equal(res.to_set, expected_response.to_set)
  end

end
