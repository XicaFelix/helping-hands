class Caregiver < ApplicationRecord
    has_many :caregiverpatientjoins
    has_many :patients, through: :caregiverpatientjoins
end
