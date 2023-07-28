class MedicationTrackerSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :medication_id, :dosage, :unit, :times_per_day, :times_per_week

  belongs_to :patient 
  belongs_to :medication 
end
