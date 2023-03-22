Rails.application.routes.draw do
  
  resources :medication_trackers
  resources :appointments
  resources :medications
  
  
  post "/signup", to: "patients#create"
  get "/me", to: "patients#show"
  get "/patients", to: "patients#index"
  post "/login", to: "sessions#create"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
