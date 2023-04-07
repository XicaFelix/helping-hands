import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Select, Space, TimePicker, DatePicker } from 'antd';

function AppointmentForm(){

    // keep track of changes to appointments
    const [appt, setAppt] = useState({
        provider_name : '',
        date : '',
        time : '',
        location : '',
        patient_id : 1
    });

    function handleChange(event){

        setAppt({...appt,
            [event.target.name] : event.target.value
        });
    };


    return(
        <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
        <Form>
            <Form.Item label='Provider Name' >
                <Input placeholder='Provider Name' value={appt.provider_name} name='provider_name' onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Date:'>
                <DatePicker onChange={()=> console.log(date, dateString)} />
            </Form.Item>
            <Form.Item label='Time'>
                <TimePicker onChange={(value)=> console.log(value)}/>
            </Form.Item>
            <Form.Item label='Location'>
                <Input placeholder='Location' value={appt.location} name='location' onChange={handleChange}/>
            </Form.Item>
            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                <Button onClick={handleCreate}>Add</Button>
            </Space>
        </Form>
        </Space>
    );


};

export default AppointmentForm;