import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import {Avatar, Layout, Menu, Tabs, Space} from 'antd'
import TabPane from 'antd/es/tabs/TabPane';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';

import AppHeader from '../Header';
import Appointment from './Appointment';
import Medications from './Medications';
import { UserContext } from '../../Contexts/UserProvider';




function MainPage(){
    const navigate = useNavigate();
    const {currentUser, setCurrentUser, setLoggedIn} = useContext(UserContext);
    console.log('current user, main page', currentUser);
    let medicationList = currentUser?.medications?.map((medication)=> <Medications medication={medication}/>)
    let appointmentList = currentUser?.appointments?.map((appointment)=> <Appointment key={appointment.id} appointment={appointment} />)

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
                    {currentUser.person_name ? <h3>{`Welcome ${currentUser.person_name}!`} </h3> : <h3>Error Loading User</h3>}
                    <Tabs type='card'>
                        <TabPane tab='Medications' key={1}>
                        {medicationList ? medicationList : <p>Error loading medications</p>}
                        </TabPane>
                        <TabPane tab='Appointments' key={2}>
                            {appointmentList ? appointmentList : <p>Error loading appointments</p>}
                        </TabPane>
                    </Tabs>
                </Content>
                <Sider collapsible>
                    <Menu theme='light' mode='inline' onClick={handleSelect}>
                        <Space size={5}>
                            <span style={{fontStyle: 'oblique', fontWeight: 'bolder'}}> <Avatar size={32} src={currentUser.avatar_url} style={{marginLeft: '1rem'}}/> {`${currentUser.person_name}`} </span> 
                        </Space>
                        <MenuItem key={1} onClick={()=> navigate('/home')}> Home</MenuItem>
                        <MenuItem key={2} onClick={()=>navigate('/medication/new')}>(+) Medication</MenuItem>
                        <MenuItem key={3} onClick={()=> navigate('/appointment/new')}> (+) Appointment</MenuItem>
                        <MenuItem key={4}>Profile</MenuItem>
                        <MenuItem key={5}>Logout</MenuItem>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    );
}

export default MainPage;