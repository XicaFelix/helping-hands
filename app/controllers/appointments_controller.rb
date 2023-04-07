class AppointmentsController < ApplicationController
    def index
        render json: Appointment.all
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment
    end


    private

    def appointment_params
        params.permit(:location, :provider_name, :date, :time, :patient_id)
    end

end
