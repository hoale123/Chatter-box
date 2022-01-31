class RestaurantsController < ApplicationController
    before_action :find_restaurant, only: [:show, :update, :destroy]
      
    # before_action :find_restaurant
    skip_before_action :authorize, only: :index
  
  def index
      restaurants = Restaurant.all.sort_by(&:created_at).reverse
      render json: restaurants,  status: :ok
  end
  
      #  GET /restaurants/1
  def show
      restaurant = find_restaurant
      render json: restaurant, status: :ok
  end
  
    # POST /restaurants
    def create
      restaurant = @current_user.restaurants.create!(restaurant_params)
      render json: restaurant, status: :created
    end
  
    # PATCH/PUT /restaurants/1
    def update
      restaurant = find_restaurant 
      restaurant.update!(restaurant_params)
      render json: restaurant, status: :accepted
    end
  
  #   # DELETE /restaurants/1
    def destroy
      # byebug
        restaurant = @current_user.restaurants.find(params[:id])
        restaurant.destroy
        head :no_content
    end
  
      private
  
      def find_restaurant
      restaurant = @current_user.restaurants.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def restaurant_params
          params.permit(:name, :description, :image, :location)
      end
  end
  