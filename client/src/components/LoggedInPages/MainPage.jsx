import { useNavigate } from 'react-router-dom';

import {Layout, Menu, Tabs} from 'antd'
import TabPane from 'antd/es/tabs/TabPane';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';

import AppHeader from '../Header';
import Appointment from './Appointment';
import Medications from './Medications';



function MainPage({currentUser, setCurrentUser, user, setUser, meds, setMeds}){
    const navigate = useNavigate();

    let medsList;
    let apptList;
    console.log(currentUser);

    if(currentUser !== null || currentUser !== {}){
        medsList = currentUser?.medications.map((medication)=> <Medications key={medication.id} medication={medication} meds={meds} setMeds={setMeds}/>)
        apptList = currentUser?.appointments.map((appointment)=> <Appointment key={appointment.id} appointment={appointment}/>)
    }



    function handleSelect(event){
       
        if(event.key === '5'){
            // log the user out
            fetch('http://localhost:3000/logout', {
                method : "DELETE"
            }).then((resp)=>{
                if(resp.ok){
                    setUser({
                        username: '',
                        password: ''
                    })
                    console.log(resp);
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
                    <Tabs type='card'>
                        <TabPane tab='Medications' key={1}>
                        {currentUser !==null ? medsList : <h3> System error</h3>}
                        </TabPane>
                        <TabPane tab='Appointments' key={2}>
                            {currentUser !==null ? apptList : <h3> System error</h3>}
                        </TabPane>
                    </Tabs>
                </Content>
                <Sider collapsible>
                    <Menu theme='light' mode='inline' onClick={handleSelect}>
                        <MenuItem key={1} onClick={()=> navigate('/home')}> Home</MenuItem>
                        <MenuItem key={2} onClick={()=> navigate('/edit')}>(+) Medication</MenuItem>
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