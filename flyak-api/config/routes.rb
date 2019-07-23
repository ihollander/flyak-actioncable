Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tickets, only: :create
      resources :flights, only: [:index, :show]

      get '/login', to: 'users#login'
    end
  end

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
