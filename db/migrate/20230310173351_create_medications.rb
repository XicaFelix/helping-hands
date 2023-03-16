class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :dosage
      t.string :unit
      t.integer :times_per_day
      t.integer :times_per_week
      t.timestamps
    end
  end
end
