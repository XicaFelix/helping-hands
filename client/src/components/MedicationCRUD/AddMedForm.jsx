import {  useContext, useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Select, Space, Switch} from 'antd';
import { UserContext } from '../../Contexts/UserProvider';


function AddMedForm({currentUser, setCurrentUser,allMeds, setAllMeds }){
    const navigate = useNavigate();
   

    //  keep track of any response errors
    const [errors, setErrors] = useState([]);

    const [newMed, setNewMed] = useState({});

    const [checked, setChecked] = useState(false)

    const[updatedTracker, setUpdatedTracker] = useState({
        patient_id: currentUser.id,
            medication_id: 0,
            dosage: newMed.dosage,
            times_per_day: newMed.times_per_day,
            times_per_week: newMed.times_per_week,
            unit: newMed.unit
    })
 

    let medicationList = allMeds.map((medication)=> <Select.Option value={medication.name} key={medication.id}>{`${medication.name}`} </Select.Option>)
 
    
    //  keep track of changes to the medication form
    function handleChange(event){
        setNewMed({...newMed,
            [event.target.name] : event.target.value
        });
        console.log('handle change - med', newMed);
    };

    function handleChecked(event){
        setChecked(event);
        console.log('checked:', checked);
    }
    useEffect(()=>{
        const med = allMeds?.find((med)=> med.name === newMed.name)
        let chosenMed = med ? med : 0;
        console.log('selectedmed', chosenMed)
        console.log('converting med to tracker')
       setUpdatedTracker({...updatedTracker,
            patient_id: currentUser.id,
            medication_id: chosenMed.id,
            dosage: newMed.dosage,
            times_per_day: newMed.times_per_day,
            times_per_week: newMed.times_per_week,
            unit: newMed.unit
        })
        // console.log('converted tracker', updatedTracker)
    }, [newMed])

   
    function addTracker(tracker){
        // find the name and id of the medication
        const newMed = allMeds.find((meds)=> meds.id === tracker.medication_id)
        console.log('newMed', newMed);
        // update the user's meds list
        const updatedMeds = [...currentUser.medications, newMed]
        console.log('updatedMeds', updatedMeds);
        // update the current user's trackers
        const updatedTrackers = [...currentUser.medication_trackers, tracker]
        console.log('adding tracker to array', updatedTrackers);
        // update the current user
        setCurrentUser({...currentUser, medication_trackers: updatedTrackers, medications: updatedMeds})
        console.log('updated user', currentUser)
        navigate('/home');
    };
    

// Send post request to database, add newly created medication tracker to current user object
    function handleCreate(event){
        event.preventDefault();
    
        fetch('http://localhost:3000/medication_trackers', {
            method : "POST",
            headers : {"Content-Type" : "application/json",},
            body : JSON.stringify(updatedTracker),
        }).then((resp)=>{
            console.log(resp);
            if(resp.ok){
                resp.json().then(((tracker)=>{
                    console.log('new med', tracker);
                    addTracker(tracker);
                }))
            }else{
                resp.json().then((error)=>{
                    console.log(error);
                    setErrors(resp.error);
                    console.log('post failure');
                    console.log(errors);
                });
            };
        })
    };

    function addMedication(medication){
        // update the list of all medications
        setAllMeds([...allMeds, medication])
        setChecked(false)
        setNewMed({...newMed, medicationName: ''})
    };

    // create a new medication
    function handleMedicationCreate(event){
        event.preventDefault();
        console.log(newMed.medicationName)
        fetch('/medications', {
            method : "POST",
            headers : {"Content-Type": "application/json",},
            body : JSON.stringify({name: newMed.medicationName, patient_id: currentUser.id}),
        }).then((response)=>{
            console.log(response);
            if(response.ok){
                response.json().then((medication)=>{
                    console.log('added med', medication)
                    addMedication(medication);

                })
            }else{
                response.json().then((error)=>{
                    console.log('error adding med', error)
                })
            }
        })
    }
    
    const listOfMeds = (
        <Form.Item label='Medication Name' >
            <Select value={newMed.name} name='name' onChange={(e)=> setNewMed({...newMed, 'name': e})}>
                {medicationList}
            </Select>
         </Form.Item>
    )

    const inputMedField = (
        <>
            <Form.Item label='Medication Name'>
                <Input placeholder='Medication Name' value={newMed.medicationName} name='medicationName' onChange={handleChange}/>
            </Form.Item>
            <div>
                <Button onClick={handleMedicationCreate}>Add to List </Button>
            </div>
        </>
    )

    return(
        <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
            {errors.length ? <h2>`${errors}`</h2>: <></>}
        <Form>
            {checked ? inputMedField : listOfMeds}
            {/* <Form.Item label='Medication Name' >
                <Select value={newMed.name} name='name' onChange={(e)=> setNewMed({...newMed, 'name': e})}>
                    {medicationList}
                </Select>
            </Form.Item>
            <Form.Item label='Medication Name'>
                <Input placeholder='Medication Name' value={newMed.medicationName} name='medicationName' onChange={handleChange}/>
            </Form.Item> */}
            <span style={{color: 'blue'}}>Medication not on the list? <Switch onChange={handleChecked} style={{marginBottom: '5px'}} checked={checked}/> </span>
            <Form.Item label='Dosage:' style={{marginTop: '10px'}}>
                <Input placeholder='Dosage' value={newMed.dosage} name='dosage' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Unit'>
            <Select value={newMed.unit}  onChange={(e)=> setNewMed({...newMed,'unit': e})}>
                <Select.Option value='mg'>MG</Select.Option>
                <Select.Option value='ml'>ML</Select.Option>
                <Select.Option value= 'puff'>Puff</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label='Times per Day'>
                <Input placeholder='Times per Day' value={newMed.times_per_day} name='times_per_day' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Times per Week'>
                <Input placeholder='Times per Week' value={newMed.times_per_week} name='times_per_week' onChange={handleChange}/>
            </Form.Item>
            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                <Button onClick={handleCreate}>Add</Button>
            </Space>
        </Form>
        </Space>
    );

}

export default AddMedForm;