class JoinTableIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :user_server_links, [:user_id, :server_id], unique: true
  end
end
