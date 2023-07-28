class MedicationTracker < ApplicationRecord
    validates :patient_id, presence: true
    validates :medication_id, presence: true
    validates :dosage, presence: true
    validates :times_per_day, presence: true, numericality:{only_integer: true}
    validates :times_per_week, presence: true, numericality: {less_than_or_equal_to: 7}
    
    belongs_to :patient 
    belongs_to :medication
end
