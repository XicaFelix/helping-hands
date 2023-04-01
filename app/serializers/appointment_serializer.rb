class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :provider_name, :date, :time, :location, :patient_id

  belongs_to :patient
end
