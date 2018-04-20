class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :subject
      t.string :description
      t.string :liked

      t.timestamps
    end
  end
end
