# == Schema Information
#
# Table name: servers
#
#  id               :bigint           not null, primary key
#  server_name      :string           not null
#  server_admin_id  :integer          not null
#  public           :boolean          default(TRUE)
#  invite_key       :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  first_channel_id :integer
#

class Server < ApplicationRecord
    validates :server_name, :server_admin_id, :invite_key, presence: true

    has_many :channels
    has_many :user_server_links

    has_many :users, through: :user_server_links

    belongs_to :server_admin,
        foreign_key: :server_admin_id,
        class_name: :User

    after_initialize :ensure_invite_key
    
    def find_first_channel_id
        if self.channels[0]
            self.first_channel_id = self.channels[0].id
        else
            false
        end
    end

    private

    def ensure_invite_key
        self.invite_key ||= SecureRandom.base64(8)
    end

end
