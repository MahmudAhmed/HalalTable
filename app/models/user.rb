# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  email            :string           not null
#  first_name       :string           not null
#  last_name        :string           not null
#  primary_location :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

CITY = [
  "Manhattan",
  "Queens",
  "Brooklyn",
  "Bronx",
  "Staten Island"
]

class User < ApplicationRecord
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :first_name, :last_name, presence: true
  validates :primary_location, inclusion: { in: CITY, message: "must be selected" }
  validates :email, email: true, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token!


  has_many :restaurants, foreign_key: :owner_id

  has_many :reviews

  has_many :favorites

  has_many :reservations


  def password=(password)
    @password = password
    
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end

  def ensure_session_token!
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end


end
