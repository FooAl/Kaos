class CreateServer < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.integer :server_admin_id, null: false
      t.boolean :public, default: true
      t.string :invite_key, null: false
      t.timestamps
    end
    add_index :servers, :server_admin_id
  end
end
