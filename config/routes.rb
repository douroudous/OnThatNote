Rails.application.routes.draw do
  devise_for :users
  root 'interface#show'

  resources :notes do
    resources :reviews
  end

  namespace :api do
    namespace :v1 do
      resources :notes, only: [:index]
    end
  end

  resources :interface, only: [:show]


end
