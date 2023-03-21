class Patient < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :avatar_url, presence: true
    validates :age, presence: true
    
    has_secure_password

    has_many :appointments
    has_many :medicationtrackers
    has_many :medications, through: :medicationtrackers
end
