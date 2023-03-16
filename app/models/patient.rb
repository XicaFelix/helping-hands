class Patient < ApplicationRecord
    has_many :appointments
    has_many :medicationtrackers
    has_many :medications, through: :medicationtrackers
end
