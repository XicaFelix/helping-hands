class MedicationTrackerSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :medication_id

  belongs_to :patient 
  belongs_to :medication 
end
