class MedicationTracker < ApplicationRecord
    validates :patient_id, presence: true
    validates :medication_id, presence: true
    
    belongs_to :patient 
    belongs_to :medication
end
