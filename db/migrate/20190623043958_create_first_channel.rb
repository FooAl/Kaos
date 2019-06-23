class CreateFirstChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :user_server_links, :first_channel_id, :integer
    
  end
end
