# == Schema Information
#
# Table name: user_server_links
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  user_alias :string
#

class UserServerLink < ApplicationRecord
    belongs_to :user
    belongs_to :server

end
