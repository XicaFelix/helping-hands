import {Tabs} from 'antd'
import Item from 'antd/es/list/Item';
import TabPane from 'antd/es/tabs/TabPane';
import Appointment from './Appointment';
import Medications from './Medications';

function MainContent(){

    return(
        <Tabs type='card'>
            <TabPane tab='Medications' key={1}>
                <Medications/>
            </TabPane>
            <TabPane tab='Appointments' key={2}>
                <Appointment/>
            </TabPane>
        </Tabs>
    );


};

export default MainContent;