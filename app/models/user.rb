class User < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :username, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  def to_param
    username
  end
end
