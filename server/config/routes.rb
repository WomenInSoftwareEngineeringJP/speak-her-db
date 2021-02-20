Rails.application.routes.draw do
  root 'application#root'
  get 'languages', to: 'languages#index'
  get 'topics', to: 'topics#index'
  get 'locations', to: 'locations#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
