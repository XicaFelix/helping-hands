import { useState } from 'react';
import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import SignUpForm from './SignUpForm';
import SignUpFormTwo from './SignUpForm2';
import SignUpFormThree from './SignUpForm3';
import backgroundImage from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-kampus-production-7551671.jpg'

function SignUpContent(){
    //  set up state to track the current page of sign up form 
    const [page, setPage] = useState(1);

    // set up state to track user signup details
    const [patient, setPatient] = useState({
        name : '',
        username : '',
        password : '',
        age: 0,
        avatar_url : ''
    })

    // determine which sign up form to render
    let form;
    if(page === 1){
        form = <SignUpForm setPage={setPage} patient={patient} setPatient={setPatient}/>
    }else if(page === 2){
        form = <SignUpFormTwo setPage={setPage} patient={patient} setPatient={setPatient}/>
    }else{
        form = <SignUpFormThree setPage={setPage} patient={patient} setPatient={setPatient}/>
    };

    return(
        <Content>
            <div className='background-image' style={{ height:700, width:1000, margin:'auto', backgroundImage:`url(${backgroundImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                <h1 style={{margin:'auto', width:'50%',  fontSize:40}}>Be the #1 Caregiver!</h1>
                <Space align='center' style={{margin: 'auto', height:'80%'}}>
                    {form}
                </Space>
            </div>
        </Content>
    );
}

export default SignUpContent;