import { Space, Button } from 'antd';
import { useNavigate} from 'react-router-dom'
import { Content } from 'antd/es/layout/layout';
import backgroundImage from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-kampus-production-7551671.jpg'

function LandingPageContent(){
    const navigate = useNavigate();


    return(
        <Content>
            <div className='background-image' style={{ height:700, width:1000, margin:'auto', backgroundImage:`url(${backgroundImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                <h1 style={{margin:'auto', width:'50%', fontSize:40}}>Be the #1 Caregiver!</h1>
                <Space align='center' style={{marginLeft: '25rem', height:'80%', width: '50%'}}>
                    <Button size='large' onClick={()=> navigate('/login')}>Login</Button>
                    <Button size='large' onClick={()=> navigate('/signup')}>SignUp</Button>
                </Space>
            </div>
        </Content>
    );
}

export default LandingPageContent;