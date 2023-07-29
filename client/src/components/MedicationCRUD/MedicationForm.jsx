import {  useContext, useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Select, Space} from 'antd';
import { UserContext } from '../../Contexts/UserProvider';


function MedicationForm(){
    const navigate = useNavigate();

    const {currentUser, setCurrentUser, selectedMed, setSelectedMed, allMeds} = useContext(UserContext);
   
    // const trackerId = currentUser.medication_trackers.findIndex(()=> index === )
    // console.log(currentUser);
    // console.log(allMeds);

    //  keep track of any response errors
    const [errors, setErrors] = useState([]);
    const[updatedTracker, setUpdatedTracker] = useState({})
 


    let medicationList = allMeds.map((medication)=> <Select.Option value={medication.name} key={medication.id}>{`${medication.name}`} </Select.Option>)
 
    
    //  keep track of changes to the medication form
    function handleChange(event){
        setSelectedMed({...selectedMed,
            [event.target.name] : event.target.value
        });
        console.log('handle change - med', selectedMed);
    };

    useEffect(()=>{
        const tracker = currentUser.medication_trackers.find((tracker)=> tracker.medication_id === selectedMed.id)
        // console.log('converting med to tracker')
       setUpdatedTracker({...updatedTracker,
            id: tracker.id,
            patient_id: currentUser.id,
            medication_id: selectedMed.id,
            dosage: selectedMed.dosage,
            times_per_day: selectedMed.times_per_day,
            times_per_week: selectedMed.times_per_week,
            unit: selectedMed.unit
        })
        // console.log('converted tracker', updatedTracker)
    }, [selectedMed])

    function changeTracker(tracker){
        console.log('change tracker function')
        // exclude the old medication tracker
        let filteredTrackers = currentUser.medication_trackers.filter((item)=> item.id !== tracker.id)
        console.log('filtered trackers', filteredTrackers)
        // add the updated tracker to the array
        currentUser.medication_trackers = filteredTrackers
        currentUser.medication_trackers = [...currentUser.medication_trackers, tracker]
        console.log('updated medication_trackers', currentUser.medication_trackers)
        // update the current user with the changed array
        const newTrackers = currentUser.medication_trackers
        let updatedUser = {...currentUser, newTrackers}
        console.log('updated user', updatedUser)
        setCurrentUser({...currentUser, updatedUser})

    };

    function handleUpdate(event){
        console.log('patching medication tracker')
        event.preventDefault();
        console.log('updated tracker', updatedTracker);
        fetch(`/medication_trackers/${updatedTracker.id}`,{
            method: "PATCH",
            headers : {"Content-Type" : "application/json",},
            body : JSON.stringify(updatedTracker),
        }).then((resp)=>{
            console.log(resp);
            if(resp.ok){
                resp.json().then(((tracker)=>{
                    console.log('patched tracker - new tracker', tracker)
                    changeTracker(tracker)
                     navigate('/home');
                }))
            }else{
                resp.json().then((resp)=>{
                    console.log(resp);
                    setErrors(resp.errors);
                    console.log('patch failure');
                    console.log(errors);
                });
            }
        })
    };

    function deleteTracker(){
        console.log('delete tracker');
        // exclude the deleted medication tracker
         let filteredTrackers = currentUser.medication_trackers.filter((item)=> item.id !== updatedTracker.id)
         console.log('filtered trackers', filteredTrackers)
        //  exclude the deleted medication
        let filteredMeds = currentUser.medications.filter((item)=> item.id !== updatedTracker.medication_id)
        //  update the tracker and medication arrays
        const updatedTrackers = [...currentUser.medication_trackers, filteredTrackers]
        // update the current user
        setCurrentUser({...currentUser, medication_trackers: updatedTrackers, medications: filteredMeds})
        console.log('updated user', currentUser)
    };

    function handleDelete(event){
        event.preventDefault();
        fetch(`/medication_trackers/${updatedTracker.id}`,{
            method : "DELETE"
        }).then((resp)=>{
            if(resp.ok){
                 deleteTracker();
                 navigate('/home')
            }else{
                resp.json().then((error)=>{
                    setErrors(error.error);
                    console.log(error.error);
                });
            };
        });
    };
  

    return(
        <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
            {errors.length ? <h2>`${errors}`</h2>: <></>}
        <Form>
            <Form.Item label='Medication Name' >
                <Select value={selectedMed.name} name='name' onChange={(e)=> setSelectedMed({...selectedMed, 'name': e})}>
                    {medicationList}
                </Select>
            </Form.Item>
            <Form.Item label='Dosage:'>
                <Input placeholder='Dosage' value={selectedMed.dosage} name='dosage' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Unit'>
            <Select value={selectedMed.unit}  onChange={(e)=> setSelectedMed({...selectedMed,'unit': e})}>
                <Select.Option value='mg'>MG</Select.Option>
                <Select.Option value='ml'>ML</Select.Option>
                <Select.Option value= 'puff'>Puff</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label='Times per Day'>
                <Input placeholder='Times per Day' value={selectedMed.times_per_day} name='times_per_day' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Times per Week'>
                <Input placeholder='Times per Week' value={selectedMed.times_per_week} name='times_per_week' onChange={handleChange}/>
            </Form.Item>
            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleUpdate}>Update</Button>
            </Space>
        </Form>
        </Space>
    );

}

export default MedicationForm;