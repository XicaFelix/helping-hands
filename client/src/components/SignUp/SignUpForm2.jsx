import { useState } from "react";

import { Form, Input, Button } from "antd";

function SignUpFormTwo({setPage, signupDet, setSignupDet}){

    // log a user's username and password 
    function handleChange(event){
        setSignupDet({...signupDet,
            [event.target.name] : event.target.value
        });
        console.log(signupDet);
    }


    return(
        <Form layout="inline" style={{margin:'8rem'}}>
            <Form.Item label='Username'>
                <Input placeholder="Username" name="username" value={signupDet.username} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder="Password" name="password" value={signupDet.password} onChange={handleChange}/>
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