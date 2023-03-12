import { Header } from "antd/es/layout/layout";
import { Image } from "antd";

import logo from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/Helping.png';

function AppHeader(){

    return(
        <Header style={{height:150}}>
            <div className="logo">
                <Image width={150} src={logo}/>
            </div>
            
        </Header>
    )
}

export default AppHeader;