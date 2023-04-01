class Patient < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :avatar_url, presence: true
    validates :age, presence: true
    
    has_secure_password

    has_many :appointments
    has_many :medication_trackers
    has_many :medications, through: :medication_trackers
end
