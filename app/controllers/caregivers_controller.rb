class CaregiversController < ApplicationController

    def index
        render json: Caregiver.all
    end
end
