import {Tabs} from 'antd'
import Item from 'antd/es/list/Item';
import TabPane from 'antd/es/tabs/TabPane';
import Appointment from './Appointment';
import Medications from './Medications';

function MainContent({user, setUser}){
    let medsList;
    let apptList;
    console.log(user)

    if(user !== null){
        medsList = user.medications.map((medication)=> <Medications key={medication.id} medication={medication}/>)
        apptList = user.appointments.map((appointment)=> <Appointment key={appointment.id} appointment={appointment}/>)
    }

    return(
        <Tabs type='card'>
            <TabPane tab='Medications' key={1}>
               {user !==null ? medsList : <h3> System error</h3>}
            </TabPane>
            <TabPane tab='Appointments' key={2}>
                {apptList}
            </TabPane>
        </Tabs>
    );


};

export default MainContent;