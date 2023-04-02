import { useNavigate } from 'react-router-dom';

import {Layout, Row, Col, Menu} from 'antd'
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';
import AppHeader from '../Header';
import MainContent from './MainContent';

function MainPage({currentUser, setCurrentUser, user, setUser, meds, setMeds}){
    const navigate = useNavigate();

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
                    <MainContent currentUser={currentUser} setCurrentUser={setCurrentUser} meds={meds} setMeds={setMeds}/>
                </Content>
                <Sider collapsible>
                    <Menu theme='light' mode='inline' onClick={handleSelect}>
                        <MenuItem key={1} > Home</MenuItem>
                        <MenuItem key={2}>(+) Medication</MenuItem>
                        <MenuItem key={3}> (+) Appointment</MenuItem>
                        <MenuItem key={4}>Profile</MenuItem>
                        <MenuItem key={5}>Logout</MenuItem>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    );
}

export default MainPage;