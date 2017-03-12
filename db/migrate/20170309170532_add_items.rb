class AddItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.belongs_to :note, null: false
      t.text :body, null: false
      t.boolean :checked, default: false, null: false
      t.timestamps null: false
    end
  end
end
