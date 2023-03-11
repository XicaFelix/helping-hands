class Patient < ApplicationRecord
    has_many :caregiverpatientjoins 
    has_many :caregivers, through: :caregiverpatientjoins
end
