class CaregiverSerializer < ActiveModel::Serializer
  attributes :id, :username, :person_name, :password_digest, :age, :avatar_url
end
