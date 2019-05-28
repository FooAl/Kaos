class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :discord_username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_icon_url

      t.timestamps
    end
    add_index :users, :discord_username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true 
  end  
end
