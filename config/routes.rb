Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index] do
      resources :reservations, only: [:index, :show, :create, :update, :destroy]  
      resources :favorites, only: [:index, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do 
      resources :reviews, only: [:index, :create, :update, :destroy]
      resources :menus, only: [:index]
    end
  end

end
