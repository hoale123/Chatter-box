class ReviewsController < ApplicationController
    skip_before_action :authorize
    def index 
        reviews = Review.all
        render json: reviews, status: :ok
    end 

    def update
        review = Review.find_by(id: params[:id])
        review.update(review_params)
        render json: reviews
    end

    def create
        review = Restaurant.create!(review_params)
        render json: review , status: 201
    end 

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end
    private 
    def find_restaurant
        Restaurant.find(params[:id])
    end

    def review_params
        params.permit(:review, :user_id, :name, :location, :image )
    end
end
