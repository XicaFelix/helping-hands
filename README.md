# Helping Hands - Medication and Appointment Tracker for Caregivers

## Description
It can be hard to keep track of medications, appointments, and other aspects related to a sick family member. Helping Hands hopes to alleviate some of that stress. As a caregiving app, Helping Hands is designed to track a sick family member's medications and appointments. A caregiver can create an account for their family member and then log all upcoming appointments, and track medications with different administration requirements.For example, a caregiver can add an nebulizer treatment which is administered once a week, in addition to a daily use medication like vitamin D. 

Caregivers can easily update and delete their medications, and create new appointments. 

## Installation 

### Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- PostgresQL

### Installation Steps
1. Fork and clone the github repo
2. Once inside the repo, type the following commands to install the client side and server side dependencies

```sh
bundle install
npm install --prefix client
```

3. You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
  
**Note**   This project uses a PostgresQL database, you can see entries in the database by requesting the following endpoints:
- /patients - Renders all patients, with nested medication trackers, medications, and appointments
- /patients/[id] - Renders an individual patient by [id]
-  /medications - Renders all medications
-  /medications/[id] - Renders an individual medication by [id]
- /medication_trackers - Renders all medication trackers

