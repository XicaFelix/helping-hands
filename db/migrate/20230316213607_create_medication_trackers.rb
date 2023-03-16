class CreateMedicationTrackers < ActiveRecord::Migration[6.1]
  def change
    create_table :medication_trackers do |t|
        t.integer :patient_id
        t.integer :medication_id
      t.timestamps
    end
  end
end
