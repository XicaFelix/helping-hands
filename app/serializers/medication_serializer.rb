class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :unit, :times_per_day, :times_per_week

  has_many :medication_trackers
  has_many :patients, through: :medication_trackers
end
