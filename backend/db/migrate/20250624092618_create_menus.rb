class CreateMenus < ActiveRecord::Migration[8.0]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :image
      t.decimal :price
      t.text :ingredient
      t.string :tag
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
