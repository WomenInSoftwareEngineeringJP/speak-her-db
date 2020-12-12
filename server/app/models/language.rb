class Language < ApplicationRecord
  has_and_belongs_to_many :speakers # many to many relationship
end
