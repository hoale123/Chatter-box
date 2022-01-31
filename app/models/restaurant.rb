class Restaurant < ApplicationRecord
    belongs_to :user

    validates :description, presence: true, length: { in: 1..300 }
  
    validate :user_restaurants
  
    def user_restaurants
      
    end
end
