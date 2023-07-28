class MedicationTrackersController < ApplicationController

    def index
        render json: MedicationTracker.all
    end

    def create
        tracker = MedicationTracker.create!(medication_trackers_params)
        render json: tracker, status: :created
    end

    def update
        tracker = MedicationTracker.find(params[:id])
        tracker.update!(medication_trackers_params)
        render json: tracker
    end

    def destroy
        tracker = MedicationTracker.find(params[:id])
        tracker.destroy
        head :no_content 
    end

    private

    def medication_trackers_params
        params.permit(:patient_id, :medication_id, :dosage, :unit, :times_per_day, :times_per_week)
    end
end
