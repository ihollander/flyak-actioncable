class Api::V1::UsersController < ApplicationController
  
  def login
    user = User.order('RANDOM()').first
    if user
      render json: user
    else
      render json: { error: "Error creating user" }, status: :bad_request
    end
  end

end
