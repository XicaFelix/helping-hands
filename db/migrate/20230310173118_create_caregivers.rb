class CreateCaregivers < ActiveRecord::Migration[6.1]
  def change
    create_table :caregivers do |t|
      t.string :username
      t.string :password_digest
      t.int :age
      t.string :avatar_url

      t.timestamps
    end
  end
end
