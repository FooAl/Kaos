Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  mount ActionCable.server, at: "/cable"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :edit, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :destroy, :edit] do
      resources :channels, only: [:index, :show, :create]
      resources :user_server_links, only: [ :index]
    end
    resources :channels, only: [:edit, :destroy] do
      resources :messages, only: [:index, :create]
    end
    resources :messages, only: [:edit, :destroy]
    resources :user_server_links, only: [:destroy, :create]
  end

end
