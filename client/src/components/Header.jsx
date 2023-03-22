import { useNavigate } from "react-router-dom";

import { Header } from "antd/es/layout/layout";
import { Image } from "antd";

import logo from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/Helping.png';

function AppHeader(){
    const navigate = useNavigate();


    return(
        <Header style={{height:150}}>
            <div className="logo">
                <Image width={150} src={logo} preview={false} onClick={()=> navigate('/')}/>
            </div>
            
        </Header>
    )
}

export default AppHeader;