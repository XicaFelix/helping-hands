import {Layout} from 'antd'
import AppHeader from '../Header';
import LandingPageContent from './LandingPageContent';


function LandingPage(){



    return(
        <Layout className='layout'>
          <AppHeader/> 
          <LandingPageContent/>
        </Layout>
    )

}

export default LandingPage;