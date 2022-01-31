class User < ApplicationRecord
    has_many :reviews 
    has_secure_password


    validates :username, presence: true, uniqueness:  :true
    validates :password, presence: true, length: { minimum: 6, maximum:15 }
    validates :bio, length: {maximum: 100 }

end
