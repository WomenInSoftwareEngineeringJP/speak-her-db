class Speaker < ApplicationRecord
  belongs_to :location
  has_and_belongs_to_many :topics # many to many relationship
  has_and_belongs_to_many :languages # many to many relationship
end
