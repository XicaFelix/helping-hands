class Appointment < ApplicationRecord
    validates :provider_name, presence: true
    validates :date, presence: true
    validates :time, presence: true
    validates :location, presence: true

    belongs_to :patient
end
