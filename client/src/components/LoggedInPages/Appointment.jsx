import { Space, Card, Button } from "antd";


function Appointment(){

    return(
        <Space direction="vertical">
            <Card title='3/23/2023' extra={<Button type="link">Edit</Button>}>
                <h3>Medical Provider</h3>
                <p>Appointment Time</p>
                <p>Address</p>
            </Card>
        </Space>
    );
}

export default Appointment;