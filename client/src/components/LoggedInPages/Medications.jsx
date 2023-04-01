import { Space, Card, Button } from "antd";


function Medications({medication}){

    return(
        <Space direction="vertical">
            <Card title='3/23/2023' extra={<Button type="link">Edit</Button>}>
                <h3>{medication.name}</h3>
                <p>{`${medication.dosage} ${medication.unit}`}</p>
                <p>{`${medication.times_per_day} times per day`}</p>
                <p>{`${medication.times_per_week} times per week`}</p>

            </Card>
        </Space>
    );
}

export default Medications;