import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';


import {Layout, Row, Col, Menu, Space, Avatar} from 'antd'
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';
import AppHeader from '../Header';
import MedicationForm from './MedicationForm';
import { UserContext } from '../../Contexts/UserProvider';
import AddMedForm from './AddMedForm';


function NewMedPage(){
    const navigate = useNavigate();



    const {currentUser, setCurrentUser, setLoggedIn, selectedMed, setSelectedMed, allMeds, setAllMeds} = useContext(UserContext);
    // console.log(currentUser, selectedMed);

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
                    <AddMedForm currentUser={currentUser} setCurrentUser={setCurrentUser} selectedMed={selectedMed} setSelectedMed={setSelectedMed} allMeds={allMeds} setAllMeds={setAllMeds}/>
                </Content>
                <Sider collapsible>
                <Menu theme='light' mode='inline' onClick={handleSelect}>
                        <Space size={5}>
                            <span style={{fontStyle: 'oblique', fontWeight: 'bolder'}}> <Avatar size={32} src={currentUser.avatar_url} style={{marginLeft: '1rem'}}/> {`${currentUser.person_name}`} </span> 
                        </Space>
                        <MenuItem key={1} onClick={()=> navigate('/home')}> Home</MenuItem>
                        <MenuItem key={2} onClick={()=> navigate('/medication/new')}>(+) Medication</MenuItem>
                        <MenuItem key={3} onClick={()=> navigate('/home')}> Appointments</MenuItem>
                        <MenuItem key={4}>Profile</MenuItem>
                        <MenuItem key={5}>Logout</MenuItem>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    );
}

export default NewMedPage;