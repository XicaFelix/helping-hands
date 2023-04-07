import {  useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

import { Form, Input, Button, Select, Space } from 'antd';


function MedicationForm({currentUser, setCurrentUser, meds, setMeds}){
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    //  keep track of changes to the medication form
    function handleChange(event){
        setMeds({...meds,
            [event.target.name] : event.target.value
        });

        console.log(meds);
    };


// Send post request to database, add newly created medication to current user object
    function handleCreate(event){
        event.preventDefault();
        fetch('http://localhost:4000/medications', {
            method : 'POST',
            headers : {"Content-Type" : "application/json",},
            body : JSON.stringify(meds),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(((resp)=>{
                    setCurrentUser({...currentUser, resp});
                    console.log('new med', resp);
                    //  navigate('/home');
                }))
            }else{
                resp.json().then((resp)=>{
                    setErrors(resp.errors);
                    console.log('post failure');
                })
            }
        })
    };

    //  Send update request to database, update current user w/ altered medication
    function handleUpdate(event){
        event.preventDefault();
        fetch(`http://localhost:4000/medications/${meds.id}`,{
            method : "PATCH",
            headers : {"Content-Type": "application/json",},
            body : JSON.stringify(meds),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then((resp)=> {
                    setCurrentUser({...currentUser, resp});
                    console.log('resp', resp);
                    navigate('/home');
                })
            }else{
                resp.json().then((resp)=> {
                    setErrors(resp.errors);
                    console.log('patch failure:', errors);
                })
            }
        });
        setCurrentUser({...currentUser, meds});
        console.log(currentUser);
    }


    return(
        <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
        <Form>
            <Form.Item label='Medication Name' >
                <Input placeholder='Medication Name' value={meds.name} name='name' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Dosage:'>
                <Input placeholder='Dosage' value={meds.dosage} name='dosage' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Unit'>
            <Select value={meds.unit}  onChange={(e)=> setMeds({...meds,'unit': e})}>
                <Select.Option value='mg'>MG</Select.Option>
                <Select.Option value='ml'>ML</Select.Option>
                <Select.Option value= 'puff'>Puff</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label='Times per Day'>
                <Input placeholder='Times per Day' value={meds.times_per_day} name='times_per_day' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Times per Week'>
                <Input placeholder='Times per Week' value={meds.times_per_week} name='times_per_week' onChange={handleChange}/>
            </Form.Item>
            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                <Button onClick={handleCreate}>Add</Button>
                <Button>Delete</Button>
                <Button onClick={handleUpdate}>Update</Button>
            </Space>
        </Form>
        </Space>
    );

}

export default MedicationForm;