class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :subject
      t.string :description
      t.string :liked

      t.timestamps
    end
  end
end
