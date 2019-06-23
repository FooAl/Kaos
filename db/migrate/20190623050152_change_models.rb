class ChangeModels < ActiveRecord::Migration[5.2]
  def change
      add_column :servers, :first_channel_id, :integer
      remove_column :user_server_links, :first_channel_id, :integer

  end
end
