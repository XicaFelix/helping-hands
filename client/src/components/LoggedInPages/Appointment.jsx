import { Space, Card, Button } from "antd";


function Appointment({appointment}){

    return(
        <Space direction="vertical">
            <Card title={appointment.date} extra={<Button type="link">Edit</Button>}>
                <h3>{appointment.provider_name}</h3>
                <p>{appointment.time}</p>
                <p>{appointment.location}</p>
            </Card>
        </Space>
    );
}

export default Appointment;