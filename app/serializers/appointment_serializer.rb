class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :provider_name, :date, :time, :location
end
