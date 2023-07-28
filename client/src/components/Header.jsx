import { useNavigate } from "react-router-dom";

import { Header } from "antd/es/layout/layout";
import { Image } from "antd";




function AppHeader(){
    const navigate = useNavigate();

    return(
        <Header style={{height:150}}>
            <div className="logo">
                <Image width={150} src={'/src/Assets/Helping.png'} preview={false} onClick={()=> navigate('/')}/>
            </div>
            
        </Header>
    )
}

export default AppHeader;