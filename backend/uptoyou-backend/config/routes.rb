Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # auth routes
  post "/authenticate", to: "auth#authenticate"
  post "/auth/sign_up", to: "auth#create_account"
  post "/auth/sign_in", to: "auth#sign_in"
  post "/auth/reset_password", to: "auth#reset_password"

  # places routes
  post "/places/nearby_eats", to: "places#nearby_eats"
  post "/places/eats_photo", to: "places#eats_photo"
end
