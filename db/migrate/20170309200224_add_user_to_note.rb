class AddUserToNote < ActiveRecord::Migration
  def up
    add_column :notes, :user_id, :integer, null: false
  end

  def down
    remove_column :notes, :user_id
  end
end
