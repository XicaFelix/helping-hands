class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :medication_trackers
  has_many :patients
end
