require 'faker'

# Setting up medications and associated data
medications_injections = [ 'insulin glargine', 'methotrexate', 'semaglutide' ]

medications_pill = ['atorvastatin', 'levothyroxine', 'metformin','lisinopril', 'amlodipine', 'metoprolol', 'buproprion', 'lithium', 'calcium', 'vitamin d','alprazolam','mirtazapine','montekulast', 'pregablin']

medication_inhaler = ['albuterol', 'budesonide', 'ipratropium']

dosage = ['15', '30', '25', '50', '100', '150', '200', '250']


# Setting up suffixes for provider names
suffix = ['MD', 'RN', 'LSW']

# Clearing Database before seeding
Patient.destroy_all
Medication.destroy_all
Appointment.destroy_all
MedicationTracker.destroy_all


# Creating Patients
11.times do
    Patient.create(
        person_name: Faker::Name.name,
        username: Faker::Internet.username,
        password: "1234",
        age: rand(1..102),
        avatar_url: Faker::Avatar.image(size: '100x100')
    )

end


# Creating Medications

# Creating Pill based medications
medications_pill.each do |name|
    Medication.create(
        name: name
    )

end

# Creating injection based medications
medications_injections.each do |name|
    Medication.create(
        name: name
    )
end

# Creating inhaler based medications
medication_inhaler.each do |name|
    Medication.create(
        name: name
    )
end


# Setting up the join table
5.times do 
    MedicationTracker.create(
        patient_id: Patient.all.sample.id,
        medication_id: Medication.all.sample.id,
        dosage: dosage.sample(),
        unit: 'mg',
        times_per_day: Faker::Number.between(from: 1, to: 3),
        times_per_week: Faker::Number.between(from: 1, to: 7)
    )
end

5.times do
    MedicationTracker.create(
        patient_id: Patient.all.sample.id,
        medication_id: Medication.all.sample.id,
        dosage: dosage.sample(),
        unit: 'puff',
        times_per_day: Faker::Number.between(from: 1, to: 3),
        times_per_week: Faker::Number.between(from: 1, to: 7)
    ) 
end

5.times do
    MedicationTracker.create(
        patient_id: Patient.all.sample.id,
        medication_id: Medication.all.sample.id,
        dosage: dosage.sample(),
        unit: 'ml',
        times_per_day: Faker::Number.between(from: 1, to: 3),
        times_per_week: Faker::Number.between(from: 1, to: 7)
    ) 
end

# Creating Appointments
22.times do 
    Appointment.create(
        provider_name: "#{Faker::Name.first_name} #{Faker::Name.last_name}, #{suffix.sample}",
        date: Faker::Date.forward(days: 365),
        time: "#{rand(9..17)}: #{[00, 15,30,45].sample}",
        location: Faker::Address.full_address,
        patient_id: Patient.all.sample.id
    )

end