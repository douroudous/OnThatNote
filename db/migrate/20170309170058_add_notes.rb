class AddNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.boolean :checklist, default: false, null: false
      t.timestamps null: false
    end
  end
end
