import { Layout, Col, Row, Image, Space } from "antd";
import AppHeader from "../Header";
import LoginForm from "./LoginForm";
import image from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-pixabay-45842.jpg';

const {Header, Content, Footer} = Layout;

function LogInPage({user, setUser}){

    return(
        <Layout>
            <AppHeader/>
            <Content>
                <h1>Be the #1 Caregiver</h1>
                <Row>
                    <Col span={11} style={{marginLeft:'2rem', marginRight: '2rem'}}>
                            <Image src={image} alt="login-page" preview={false}/>
                    </Col>
                    <Col span={11}>
                            <LoginForm user={user} setUser={setUser}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default LogInPage;