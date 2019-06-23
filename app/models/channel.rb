# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  public       :boolean          default(TRUE)
#

class Channel < ApplicationRecord
    validates :channel_name, presence: true

    belongs_to :server
    has_many :messages,
        foreign_key: :channel_id,
        class_name: :Message

end
