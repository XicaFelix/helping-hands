class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :avatar_url, :medication_id, :appointment_id
end
