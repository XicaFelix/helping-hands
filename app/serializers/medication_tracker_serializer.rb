class MedicationTrackerSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :medication_id
end
