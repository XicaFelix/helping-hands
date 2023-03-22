import {Layout} from 'antd'
import AppHeader from '../Header';
import SignUpContent from './SignUpPageContent';




function SignUpPage(){



    return(
        <Layout className='layout'>
          <AppHeader/> 
          <SignUpContent/>
        </Layout>
    )

}

export default SignUpPage;