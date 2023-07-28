import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { Space, Card, Button } from "antd";


function Medications({medication}){

const {selectedMed, setSelectedMed, currentUser} = useContext(UserContext);

 let medicationDetails = currentUser.medication_trackers?.find((item)=> item.medication_id === medication.id )
// console.log(medicationDetails);

    const navigate = useNavigate();

    function handleClick(){
        setSelectedMed({...selectedMed, 
            id : medication.id,
            name : medication.name,
            dosage: medicationDetails.dosage,
            unit : medicationDetails.unit,
            times_per_day : medicationDetails.times_per_day,
            times_per_week : medicationDetails.times_per_week
        });
        console.log('selected Medication', selectedMed);
        navigate('/edit');
    }

    function getRandomDate(from, to){
        return new Date(
            from.getTime() +
              Math.random() * (to.getTime() - from.getTime()),
          );
    };

    let date = getRandomDate(new Date(2023, 4, 27), new Date(2023, 7, 27)).toLocaleDateString()
    console.log(date)
    return(
        <Space direction="vertical" style={{minHeight:'470px'}}>
            <Card title= {date} extra={<Button type="link" onClick={handleClick}>Edit</Button>}>
                <h3>{`${medication.name}`}</h3>
                <p>{`${medicationDetails.dosage} ${medicationDetails.unit}`}</p>
                <p>{`${medicationDetails.times_per_day} time(s) per day`}</p>
                <p>{`${medicationDetails.times_per_week} time(s) per week`}</p>

            </Card>
        </Space>
    );
}

export default Medications;