class MedicationTrackersController < ApplicationController

    def index
        render json: MedicationTracker.all
    end
end
