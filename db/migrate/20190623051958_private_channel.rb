class PrivateChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :private, :boolean, default: true
  end
end
