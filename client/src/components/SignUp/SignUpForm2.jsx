import { useState } from "react";

import { Form, Input, Button } from "antd";

function SignUpFormTwo({setPage, patient, setPatient}){

    // log patient username and password 
    function handleChange(event){
        setPatient({...patient,
            [event.target.name] : event.target.value
        });
    }


    return(
        <Form layout="inline" style={{margin:'8rem'}}>
            <Form.Item label='Username'>
                <Input placeholder="Username" name="username" value={patient.username} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder="Password" name="password" value={patient.password} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={()=> setPage(1)}>Prev</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={()=> setPage(3)}>Next</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpFormTwo;