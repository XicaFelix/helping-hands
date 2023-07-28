class CreateMedicationTrackers < ActiveRecord::Migration[6.1]
  def change
    create_table :medication_trackers do |t|
        t.string :dosage
        t.string :unit
        t.integer :times_per_day
        t.integer :times_per_week
        t.integer :patient_id
        t.integer :medication_id
      t.timestamps
    end
  end
end
