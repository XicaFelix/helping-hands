class CreateCaregiverPatientJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :caregiver_patient_joins do |t|
      t.integer :caregiver_id
      t.integer :patient_id

      t.timestamps
    end
  end
end
