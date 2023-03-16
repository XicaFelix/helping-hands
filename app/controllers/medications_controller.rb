class MedicationsController < ApplicationController

    def index
        render json: Medication.all
    end
end
