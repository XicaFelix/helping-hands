class CaregiverSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :avatar_url
end
