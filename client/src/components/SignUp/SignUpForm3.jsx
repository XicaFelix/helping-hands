import { useState } from 'react';

import {Form, Button, Input} from 'antd';

function SignUpFormThree({setPage, patient, setPatient}){

    // keep track of sign up errors
    const [errors, setErrors]= useState([]);

    function handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:3000/signup',{
            method: "POST",
            headers: { "Content-Type": "application/json",
            },                                                                                                                                                                                                                                                       
            body: JSON.stringify(patient),
            }).then((resp)=>{
                if(resp.ok){
                    resp.json().then((currentUser)=> setPatient(currentUser));
                }else{
                    resp.json().then((error)=>setErrors(error.errors));
                }
                console.log('currentUser:', patient);
                console.log('errors:', errors);
             });
        }

    // track user avatar_url
    function handleChange(event){
        setPatient({...patient,
            [event.target.name] : event.target.value
        });
    }

    return(
        <Form layout='inline' style={{margin:'17rem'}}>
            <Form.Item label='Avatar URL'>
                <Input placeholder='Avatar URL' name='avatar_url' value={patient.avatar_url} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={()=> setPage(2)}>Prev</Button>
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={handleSubmit}>Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpFormThree;