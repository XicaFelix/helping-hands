class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :provider_name
      t.string :date
      t.string :time
      t.string :location
      t.integer :patient_id

      t.timestamps
    end
  end
end
