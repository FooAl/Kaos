# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_23_052116) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "channel_name", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "public", default: true
    t.index ["channel_name"], name: "index_channels_on_channel_name"
    t.index ["server_id"], name: "index_channels_on_server_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "content", null: false
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "servers", force: :cascade do |t|
    t.string "server_name", null: false
    t.integer "server_admin_id", null: false
    t.boolean "public", default: true
    t.string "invite_key", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "first_channel_id"
    t.index ["server_admin_id"], name: "index_servers_on_server_admin_id"
  end

  create_table "user_server_links", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "server_id", null: false
    t.string "user_alias"
    t.index ["server_id"], name: "index_user_server_links_on_server_id"
    t.index ["user_id", "server_id"], name: "index_user_server_links_on_user_id_and_server_id", unique: true
    t.index ["user_id"], name: "index_user_server_links_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "discord_username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_icon_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discord_username"], name: "index_users_on_discord_username", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "channels", "servers", on_delete: :cascade
  add_foreign_key "messages", "channels", on_delete: :cascade
  add_foreign_key "messages", "users", on_delete: :cascade
  add_foreign_key "user_server_links", "servers", on_delete: :cascade
  add_foreign_key "user_server_links", "users", on_delete: :cascade
end
