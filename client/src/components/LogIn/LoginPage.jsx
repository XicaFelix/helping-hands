import { Layout, Col, Row, Image } from "antd";
import AppHeader from "../Header";
import LoginForm from "./LoginForm";
import image from '/Users/Xicafelix/Development/code/Phase-4/helping-hands/client/src/Assets/pexels-pixabay-45842.jpg';

const {Header, Content, Footer} = Layout;

function LogInPage(){

    return(
        <Layout>
            <AppHeader/>
            <Content>
                <h1>Be the #1 Caregiver</h1>
                <Row>
                    <Col>
                        <Image src={image} alt="login-page"/>
                    </Col>
                    <Col>
                        <LoginForm/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default LogInPage;