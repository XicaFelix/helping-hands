import {Layout} from 'antd'
import AppHeader from './Header';
import LandingContent from './LandingPageContent';




function LandingPage(){



    return(
        <Layout className='layout'>
          <AppHeader/> 
          <LandingContent/>
        </Layout>
    )

}

export default LandingPage;