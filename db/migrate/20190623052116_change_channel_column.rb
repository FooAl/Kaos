class ChangeChannelColumn < ActiveRecord::Migration[5.2]
  def change
        remove_column :channels, :private, :boolean, default: true
        add_column :channels, :public, :boolean, default: true

  end
end
