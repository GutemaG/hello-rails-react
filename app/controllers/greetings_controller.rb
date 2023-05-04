class GreetingsController < ApplicationController
  def index
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
    @greeting = Greeting.all.sample
    render json: @greeting
  end
end
