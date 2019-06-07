class AddForeignKeys < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :channels, :servers
    add_foreign_key :messages, :users
    add_foreign_key :messages, :channels
    add_foreign_key :user_server_links, :users
    add_foreign_key :user_server_links, :servers
  end
end
