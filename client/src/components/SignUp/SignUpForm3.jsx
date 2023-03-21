import { useState } from 'react';

import {Form, Button, Input} from 'antd';

function SignUpFormThree({setPage, patient, setPatient}){

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
                <Button type='primary'>Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpFormThree;