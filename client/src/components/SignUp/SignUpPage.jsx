import {Layout} from 'antd'
import AppHeader from '../Header';
import SignUpContent from './SignUpPageContent';




function SignUpPage({user, setUser}){



    return(
        <Layout className='layout'>
          <AppHeader/> 
          <SignUpContent user={user} setUser ={setUser}/>
        </Layout>
    )

}

export default SignUpPage;