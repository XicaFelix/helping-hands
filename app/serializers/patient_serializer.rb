class PatientSerializer < ActiveModel::Serializer
  attributes :id, :person_name, :age, :avatar_url
end
