class CreateCaregivers < ActiveRecord::Migration[6.1]
  def change
    create_table :caregivers do |t|
      t.string :username
      t.string :password_digest
      t.string :person_name
      t.integer :age
      t.string :avatar_url

      t.timestamps
    end
  end
end
