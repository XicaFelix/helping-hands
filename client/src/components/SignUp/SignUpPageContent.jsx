import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import SignUpForm from './SignUpForm';
import SignUpFormTwo from './SignUpForm2';
import SignUpFormThree from './SignUpForm3';
import backgroundImage from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-kampus-production-7551671.jpg'

function SignUpContent(){

    return(
        <Content>
            <div className='background-image' style={{ height:700, width:1000, margin:'auto', backgroundImage:`url(${backgroundImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                <h1 style={{margin:'auto', width:'50%',  fontSize:40}}>Be the #1 Caregiver!</h1>
                <Space align='center' style={{margin: 'auto', height:'80%'}}>
                    <SignUpFormThree/>
                </Space>
            </div>
        </Content>
    );
}

export default SignUpContent;