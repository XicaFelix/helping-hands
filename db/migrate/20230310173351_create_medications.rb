class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :dosage
      t.string :unit
      t.int :times_per_day
      t.int :times_per_week
      t.int :patient_id
      t.timestamps
    end
  end
end
