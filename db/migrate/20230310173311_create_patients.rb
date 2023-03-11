class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :person_name
      t.integer :age
      t.string :avatar_url
      

      t.timestamps
    end
  end
end
