class MedicationsController < ApplicationController

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
    
    def delete
        medication = Medication.find(params[:id])
        medication.destroy
        head :no_content
    end

    private

    def find_medication
       @medication =  Medication.find_by(id: params[:id])
    end

    def medication_params
        params.permit(:name, :unit, :dosage, :times_per_day, :times_per_week)
    end
end
