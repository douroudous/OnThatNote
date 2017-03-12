class Item < ActiveRecord::Base
  belongs_to :note

  validates :body, presence: true
  validates :checked, inclusion: { in: [true, false] }

end
