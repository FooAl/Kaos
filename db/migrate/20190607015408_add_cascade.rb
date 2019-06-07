class AddCascade < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :channels, :servers
    remove_foreign_key :messages, :users
    remove_foreign_key :messages, :channels
    remove_foreign_key :user_server_links, :users
    remove_foreign_key :user_server_links, :servers
  end
end
