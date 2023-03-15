import { Space, Card, Button } from "antd";


function Medications(){

    return(
        <Space direction="vertical">
            <Card title='3/23/2023' extra={<Button type="link">Edit</Button>}>
                <h3>Medication Name</h3>
                <p>Medication Dosage</p>
                <p>Times per Day</p>
                <p>Times per Week</p>

            </Card>
        </Space>
    );
}

export default Medications;