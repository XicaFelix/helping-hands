class PatientsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: Patient.all
    end

    def create
        patient = Patient.create!(patient_params)
        session[:patient_id] = patient.id
        render json: patient, status: :created
    end

    def show
        render json: @current_patient
    end

    private

    def patient_params
        params.permit(:username, :person_name, :password, :avatar_url, :age )
    end
end
