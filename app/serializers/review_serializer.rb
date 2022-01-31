class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :image, :location
end
