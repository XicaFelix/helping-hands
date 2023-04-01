class PatientSerializer < ActiveModel::Serializer
  attributes :id, :person_name, :age, :avatar_url, :username

  has_many :appointments

  has_many :medication_trackers
  has_many :medications, through: :medication_trackers
end
