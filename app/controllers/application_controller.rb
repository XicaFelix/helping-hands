class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

  private

  def authorize
    @current_patient = Patient.find_by(id: session[:patient_id])
  end

  def unprocessable_entity_response(exception)
    render json:  { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
