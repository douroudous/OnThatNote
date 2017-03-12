class Note < ActiveRecord::Base

  belongs_to :user
  has_many :items, dependent: :destroy

  validates :title, presence: true

  def self.search(search)
    where("body ILIKE ? OR title ILIKE ?", "%#{search}%", "%#{search}%")
  end

end
