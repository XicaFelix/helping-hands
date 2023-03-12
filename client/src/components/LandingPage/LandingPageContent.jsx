import { Space, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import backgroundImage from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-kampus-production-7551671.jpg'

function LandingPageContent(){

    return(
        <Content>
            <div className='background-image' style={{ height:700, width:1000, margin:'auto', backgroundImage:`url(${backgroundImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                <h1 style={{margin:'auto', width:'50%',  fontSize:40}}>Be the #1 Caregiver!</h1>
                <Space align='center' style={{margin: 'auto', height:'80%'}}>
                    <Button>Login</Button>
                    <Button>SignUp</Button>
                </Space>
            </div>
        </Content>
    );
}

export default LandingPageContent;