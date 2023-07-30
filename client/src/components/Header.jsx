import { useNavigate } from "react-router-dom";

import { Header } from "antd/es/layout/layout";
import { Image } from "antd";




function AppHeader(){
    const navigate = useNavigate();

    return(
        <Header style={{height:150}}>
            <div className="logo">
                <h1 onClick={()=> navigate('/')} style={{color: 'white'}}>Helping Hands</h1>
            </div>
            
        </Header>
    )
}

export default AppHeader;