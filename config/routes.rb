Rails.application.routes.draw do
  devise_for :users
  root 'interface#show'

  namespace :api do
    namespace :v1 do
      resources :notes
    end
  end

  resources :interface, only: [:show]

end
