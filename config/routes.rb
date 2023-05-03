Rails.application.routes.draw do
  get 'greeting/index'
  root 'root#index'
  get 'greetings', to: 'greetings#index'
end
