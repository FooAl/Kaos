class ForeignKeysWithCascade < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :channels, :servers, on_delete: :cascade
    add_foreign_key :messages, :users, on_delete: :cascade
    add_foreign_key :messages, :channels, on_delete: :cascade
    add_foreign_key :user_server_links, :users, on_delete: :cascade
    add_foreign_key :user_server_links, :servers, on_delete: :cascade
  end
end
