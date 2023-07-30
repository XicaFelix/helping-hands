class MedicationsController < ApplicationController
skip_before_action :authorize, only: :index
    def index
        render json: Medication.all
    end

    def show
        medication = Medication.find(params[:id])
        render json: medication
    end

    def update
        medication = Medication.find(params[:id])
        medication.update!(medication_params)
        render json: medication
    end
    
    def destroy
        medication = Medication.find(params[:id])
        medication.destroy
        head :no_content
    end

    def create
        medication = Medication.create!(medication_params)
        render json: medication, status: :created
    end

    private

    def find_medication
       @medication =  Medication.find_by(id: params[:id])
    end

    def medication_params
        params.require(:medication).permit(:name, :patient_id)
    end
end
