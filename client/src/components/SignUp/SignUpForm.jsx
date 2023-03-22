import { useState } from "react";

import { Form, Input, Button } from "antd";

function SignUpForm({setPage, patient, setPatient}){

    // setting up state to track patient first and last name 
    const [name, setName] = useState({
        firstName : '',
        lastName : ''
    })

    // log changes to user info
    function handleChange(event){
        setName({...name, 
            [event.target.name] : event.target.value
        });

        setPatient({...patient,
            [event.target.name] : event.target.value
        });

    }


    function handleClick(){
        let fullName = name.firstName + " " + name.lastName;
        setPage(2);
        setPatient({...patient,
            name : fullName
        });
    }

    return(
        <Form layout="inline" style={{margin:'11rem'}}>
            <Form.Item label='First Name' style={{paddingBottom: '1rem'}}>
                <Input placeholder="First Name" name="firstName" value={name.firstName} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Last Name'>
                <Input placeholder="Last Name" name="lastName" value={name.lastName} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Age' style={{marginLeft: '8rem'}}>
                <Input placeholder="Age" name="age" value={patient.age} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleClick}>Next</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpForm;