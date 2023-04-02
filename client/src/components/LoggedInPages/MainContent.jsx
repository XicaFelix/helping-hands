import {Tabs} from 'antd'
import Item from 'antd/es/list/Item';
import TabPane from 'antd/es/tabs/TabPane';
import Appointment from './Appointment';
import Medications from './Medications';

function MainContent({user, setUser, currentUser, setCurrentUser, meds, setMeds}){
    let medsList;
    let apptList;
    console.log(currentUser);

    if(currentUser !== null || currentUser !== undefined){
        medsList = currentUser.medications.map((medication)=> <Medications key={medication.id} medication={medication} meds={meds} setMeds={setMeds}/>)
        apptList = currentUser.appointments.map((appointment)=> <Appointment key={appointment.id} appointment={appointment}/>)
    }

    return(
        <Tabs type='card'>
            <TabPane tab='Medications' key={1}>
               {currentUser !==null ? medsList : <h3> System error</h3>}
            </TabPane>
            <TabPane tab='Appointments' key={2}>
                {currentUser !==null ? apptList : <h3> System error</h3>}
            </TabPane>
        </Tabs>
    );


};

export default MainContent;