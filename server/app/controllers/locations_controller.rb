class LocationsController < ApplicationController
  def index
    @locations = Location.order(code: :asc).all
  end
end
