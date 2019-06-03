# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
    validates :content, presence: true
    
    belongs_to :user
    belongs_to :channel
end
