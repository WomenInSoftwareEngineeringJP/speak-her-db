require 'test_helper'

class SpokenLanguagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get spoken_languages_index_url
    assert_response :success
  end

end
