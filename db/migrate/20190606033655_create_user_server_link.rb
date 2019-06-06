class CreateUserServerLink < ActiveRecord::Migration[5.2]
  def change
    create_table :user_server_links do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.string :user_alias
    end
    add_index :user_server_links, :user_id
    add_index :user_server_links, :server_id
  end
end
