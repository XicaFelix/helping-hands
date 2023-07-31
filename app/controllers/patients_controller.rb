class PatientsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: Patient.all
    end

    def create
        patient = Patient.create!(patient_params)
        session[:user_id] = patient.id
        render json: patient, status: :created
    end

    def show
        if @current_patient === nil
            render json: {error: 'no logged in user found'}
        else
            render json: @current_patient
        end
    end

    private

    def patient_params
        params.permit(:username, :person_name, :password, :avatar_url, :age )
    end
end
