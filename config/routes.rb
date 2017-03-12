Rails.application.routes.draw do
  devise_for :users
  root 'notes#index'

  resources :notes do
    resources :reviews
  end

  # namespace :api do
  #   namespace :v1 do
  #     resources :songs, only: [:show, :update]
  #     resources :artists, only: [:show] do
  #       resources :songs, only: [:new, :create]
  #     end
  #   end
  # end

  resources :interface, only: [:show]


end
