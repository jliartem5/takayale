PjaxRails::Application.routes.draw do
  get "page1" => "pages#page1"
  get "page2" => "pages#page2"

  root :to => "pages#index"
end
