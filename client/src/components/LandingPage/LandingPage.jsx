import { useNavigate} from 'react-router-dom'

import AppHeader from '../Header';
import backgroundImage from '../pexels-kampus-production-7551671.jpg';
import {Layout, Space, Button} from 'antd'
import { Content } from 'antd/es/layout/layout';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserProvider';



function LandingPage(){
  const navigate = useNavigate();
  const {loggedIn} = useContext(UserContext);

  function handleClick(){
    if(loggedIn){
      navigate('/home');
    }else{
      navigate('/login');
    }
  };

    return(
        <Layout className='layout'>
          <AppHeader/> 
          <Content>
            <div className='background-image' style={{ height:700, width:1000, margin:'auto', backgroundImage:`url(${backgroundImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
                <h1 style={{margin:'auto', width:'50%', fontSize:40}}>Be the #1 Caregiver!</h1>
                <Space align='center' style={{marginLeft: '25rem', height:'80%', width: '50%'}}>
                    <Button size='large' onClick={handleClick}>{loggedIn ? 'Go Home' : 'Login'}</Button>
                    {loggedIn ? <></> : <Button size='large' onClick={()=> navigate('/signup')}>SignUp</Button>}
                </Space>
            </div>
        </Content>
        </Layout>
    )

}

export default LandingPage;