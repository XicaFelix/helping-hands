import { useNavigate } from "react-router-dom";

import { Space, Card, Button } from "antd";


function Medications({medication, meds, setMeds}){
    const navigate = useNavigate();

    function handleClick(){
        setMeds(medication);
        navigate('/edit');
    }
    return(
        <Space direction="vertical" style={{minHeight:'470px'}}>
            <Card title='3/23/2023' extra={<Button type="link" onClick={handleClick}>Edit</Button>}>
                <h3>{medication.name}</h3>
                <p>{`${medication.dosage} ${medication.unit}`}</p>
                <p>{`${medication.times_per_day} times per day`}</p>
                <p>{`${medication.times_per_week} times per week`}</p>

            </Card>
        </Space>
    );
}

export default Medications;