class Medication < ApplicationRecord
    validates :name, presence: true
    validates :dosage, presence: true
    validates :times_per_day, presence: true, numericality:{only_integer: true}
    validates :times_per_week, presence: true, numericality: {less_than_or_equal_to: 7}

    has_many :medicationtrackers
    has_many :patients, through: :medicationtrackers
end
