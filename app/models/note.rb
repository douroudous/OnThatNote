class Note < ActiveRecord::Base

  belongs_to :user
  has_many :items, dependent: :destroy

  validates :title, presence: true

end
