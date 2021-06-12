class ApplicationController < ActionController::API
  include ActionController::ImplicitRender

  def root
    if Rails.env == 'development'
      redirect_to '/rails/info/routes'
    else
      redirect_to 'https://speakher.jp'
    end
  end
end
