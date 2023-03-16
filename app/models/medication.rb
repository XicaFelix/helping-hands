class Medication < ApplicationRecord
    has_many :medicationtrackers
    has_many :patients, through: :medicationtrackers
end
