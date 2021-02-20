Rails.application.routes.draw do
  root 'application#root'

  resources :spoken_languages, only: :index
  resources :topics, only: :index
  resources :locations, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
