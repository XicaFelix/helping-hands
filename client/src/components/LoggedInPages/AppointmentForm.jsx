import {  useState, useContext } from 'react';
import { UserContext } from '../../Contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../Header';
import {Layout, Menu, Space, Avatar, Form, Input, Button, TimePicker, DatePicker} from 'antd'
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';


function AppointmentForm(){

    const {currentUser, setCurrentUser, setLoggedIn} = useContext(UserContext);

    const [errors, setErrors] = useState([])

    const navigate = useNavigate();

    // keep track of changes to appointments
    const [appt, setAppt] = useState({
        provider_name : '',
        date : '',
        time : '',
        location : '',
        patient_id : currentUser.id
    });

    function handleChange(event){

        setAppt({...appt,
            [event.target.name] : event.target.value
        });
        console.log(appt);
    };

    function addAppt(appointment){
        const userAppts = [...currentUser.appointments, appointment]
        setCurrentUser((currentUser)=>({...currentUser, appointments: userAppts}))
        console.log('new appt:', userAppts)
        navigate('/home');
    };

    function handleCreate(event){
        console.log('creating appointment');
        event.preventDefault();
        fetch('/appointments',{
            method : "POST",
            headers : {"Content-Type": "application/json",},
            body : JSON.stringify(appt)
        }).then((response)=>{
            if(response.ok){
                response.json().then((appointment)=>{
                    console.log('new appt', appointment);
                    addAppt(appointment);
                })
            }else{
                response.json().then((error)=>{
                    console.log('error', error);
                    setErrors([...errors, error]);
                    console.log('post failure');
                })
            };
        })
    }

    function handleSelect(event){
       
        if(event.key === '5'){
            // log the user out
            fetch('http://localhost:3000/logout', {
                method : "DELETE"
            }).then((resp)=>{
                if(resp.ok){
                    console.log('user logged out');
                    setLoggedIn(false);
                    console.log(resp);
                    console.log('current user:', currentUser);
                    navigate('/');
                }
            })
        } 
    };

    return(
        <Layout>
            <AppHeader/>
            <Layout>
                <Content>
                    <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
                        <Form>
                            <Form.Item label='Provider Name' >
                                <Input placeholder='Provider Name' value={appt.provider_name} name='provider_name' onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item label='Date:'>
                                <DatePicker value={appt.date} onChange={(date)=> setAppt({...appt, date: date})} />
                            </Form.Item>
                            <Form.Item label='Time'>
                                <TimePicker format={'HH:mm'} value={appt.time} onChange={(timeString)=> setAppt({...appt, time : timeString})}/>
                            </Form.Item>
                            <Form.Item label='Location'>
                                <Input placeholder='Location' value={appt.location} name='location' onChange={handleChange}/>
                            </Form.Item>
                            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                                <Button onClick={handleCreate} >Add</Button>
                            </Space>
                        </Form>
                    </Space>
                </Content>
                <Sider collapsible>
                    <Menu theme='light' mode='inline' onClick={handleSelect}>
                        <Space size={5}>
                            <span style={{fontStyle: 'oblique', fontWeight: 'bolder'}}> <Avatar size={32} src={currentUser.avatar_url} style={{marginLeft: '1rem'}}/> {`${currentUser.person_name}`} </span> 
                        </Space>
                        <MenuItem key={1} onClick={()=> navigate('/home')}> Home</MenuItem>
                        <MenuItem key={2} onClick={()=> navigate('/medication/new')}>(+) Medication</MenuItem>
                        <MenuItem key={3} onClick={()=> navigate('/appointment/new')}>(+) Appointments</MenuItem>
                        <MenuItem key={4}>Profile</MenuItem>
                        <MenuItem key={5}>Logout</MenuItem>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    );


};

export default AppointmentForm;