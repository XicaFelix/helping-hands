class MedicationTracker < ApplicationRecord
    belongs_to :patient 
    belongs_to :medication
end
