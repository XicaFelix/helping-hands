import { Content } from 'antd';
import backgroundImage from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-kampus-production-7551671.jpg'

function LandingContent(){

    return(
        <Content>
            <div className='background-image' style={{backgroundImage:`url(${backgroundImage})`}}>

            </div>
        </Content>
    );
}

export default LandingContent;