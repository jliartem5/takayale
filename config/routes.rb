PjaxRails::Application.routes.draw do
  get "yakitori" => "pages#yakitori"
  get "sushi" => "pages#sushi"
  get "sashimi" => "pages#sashimi"
  get "maki" => "pages#maki"
  get "menu" => "pages#menu"
  get "menu_midi" => "pages#menu_midi"
  get "platschaud" => "pages#platschaud"
  get "contact" => "pages#contact"

  root :to => "pages#index"
end
