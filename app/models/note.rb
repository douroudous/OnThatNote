class Note < ActiveRecord::Base

  belongs_to :user
  has_many :items, dependent: :destroy

  validates :title, presence: true
  validates :checklist, inclusion: { in: [true, false] }

  def self.search(search)
    where("body ILIKE ?", "%#{search}%")
  end

end
