Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/restaurants', to: 'restaurants#index'
    post '/restaurants', to: 'restaurants#create'

    get '/restaurants/:id', to: 'restaurants#show'
    put '/restaurants/:id', to: 'restaurants#update'
    patch '/restaurants/:id', to: 'restaurants#update'
    delete '/restaurants/:id', to: 'restaurants#destroy'
  end

end
