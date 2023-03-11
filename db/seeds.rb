require 'faker'

# Setting up medications and associated data
medications_injections = [ 'insulin glargine', 'methotrexate', 'semaglutide' ]

medications_pill = ['atorvastatin', 'levothyroxine', 'metformin','lisinopril', 'amlodipine', 'metoprolol', 'buproprion', 'lithium', 'calcium', 'vitamin d','alprazolam','mirtazapine','montekulast', 'pregablin']

medication_inhaler = ['albuterol', 'budesonide', 'ipratropium']

dosage = ['15', '30', '25', '50', '100', '150', '200', '250']


# Setting up suffixes for provider names
suffix = ['MD', 'RN', 'LSW']

# Creating Caregivers
5.times do
    Caregiver.create(
        username: Faker::Internet.username,
        password_digest: "",
        name: Faker::Name.name,
        age: rand(18..85),
        avatar_url: Faker::Avatar.image(size: '100x100')
    )
end

# Creating Patients
11.times do
    Patient.create(
        name: Faker::Nane.name,
        age: rand(1..102),
        avatar_url: Faker::Avatar.image(size: '100x100')
    )

end

# Setting up the join table
11.times do
    CaregiverPatientJoin.create(
        caregiver_id: Caregiver.all.sample.id,
        patient_id: Patient.all.sample.id
    )

end



# Creating Medications

# Creating Pill based medications
medications_pill.each do |name|
    Medication.create(
        name: name,
        dosage: dosage.sample(),
        unit: 'mg',
        times_per_day: rand(1..3),
        times_per_week: rand(1..7),
        patient_id: Patient.all.sample.id
    )

end

# Creating injection based medications
medications_injections.each do |name|
    Medication.create(
        name: name,
        dosage: dosage.sample(),
        unit: 'ml',
        times_per_day: rand(1..3),
        times_per_week: rand(1..7),
        patient_id: Patient.all.sample.id
    )
end

# Creating inhaler based medications
medication_inhaler.each do |name|
    Medication.create(
        name: name,
        dosage: rand(1..3),
        unit: 'puff'
        times_per_day: rand(1..2),
        times_per_week: rand(1..7),
        patient_id: Patient.all.sample.id
    )
end

# Creating Appointments
20.times do 
    Appointment.create(
        provider_name: "#{Faker::Name.first_name} #{Faker::Name.last_name}, #{suffix.sample}",
        date: Faker::Date.forward(days: 365),
        time: "#{rand(9..17)}: #{[00, 15,30,45].sample}",
        location: Faker::Address.full_address,
        patient_id: Patient.all.sample.id
    )

end