class Medication < ApplicationRecord
    validates :name, uniqueness: true, presence: true


    has_many :medication_trackers
    has_many :patients, through: :medication_trackers
end
