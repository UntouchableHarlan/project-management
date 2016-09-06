Rails.application.routes.draw do
  root 'home#index'
  get '/signup' => 'users#new'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get ':id', to: 'users#show', as: 'show'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
