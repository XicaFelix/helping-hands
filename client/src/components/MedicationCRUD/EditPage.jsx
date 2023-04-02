import {Layout, Row, Col, Menu} from 'antd'
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuItem from 'antd/es/menu/MenuItem';
import AppHeader from '../Header';
import MedicationForm from './MedicationForm';


function EditPage({user, setUser, meds, setMeds}){

    return(
        <Layout>
            <AppHeader/>
            <Layout>
                <Content>
                    <MedicationForm user={user} setUser = {setUser} meds={meds} setMeds={setMeds}/>
                </Content>
                <Sider collapsible>
                    <Menu theme='light' mode='inline' >
                        <MenuItem key={1} > Home</MenuItem>
                        <MenuItem key={2}>Medications</MenuItem>
                        <MenuItem key={3}>Appointments</MenuItem>
                        <MenuItem key={4}>Profile</MenuItem>
                    </Menu>
                </Sider>
            </Layout>
        </Layout>
    );
}

export default EditPage;