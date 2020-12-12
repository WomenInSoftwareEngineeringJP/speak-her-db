require 'test_helper'

class LocationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get location_index_url
    assert_response :success
  end

end
