class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :location
end
