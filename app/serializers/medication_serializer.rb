class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :unit, :times_per_day, :times_per_week
end
