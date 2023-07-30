import { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Layout, Col, Row, Image,  Button, Form, Input, List } from "antd";
import AppHeader from "../Header";

import image from '../pexels-kampus-production-7551671.jpg';
import { UserContext } from "../../Contexts/UserProvider";

const {Header, Content, Footer} = Layout;


function LogInPage(){
    const [user, setUser] = useState({});
    const { currentUser, setCurrentUser, setLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

    const [error, setError] = useState([]);
    const [displayError, setDisplayError] = useState(false);


    // track username and password
    function handleChange(event){
        setUser({...user, 
            [event.target.name]: event.target.value
            });
    };

    // submit post request to log user in
    function handleSubmit(event){
        if(user.username || user.password === ''){
            setError([...error, "Please complete all fields"])
            setDisplayError(true)
        }else{
           let newError = error.pop()
            setError([...error, newError])
            setDisplayError(false)
        }
        event.preventDefault();
        fetch('http://localhost:3000/login',{
            method : "POST",
            headers: {
                "Content-Type" : "application/json",

            },
            body: JSON.stringify(user),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then((user)=> {
                    console.log('logged in');
                    console.log(user);
                    setCurrentUser(user)
                    console.log(currentUser);
                });
                setLoggedIn(true);
                navigate('/home');
            }else{
                resp.json().then((error)=> console.log(error));
                console.log('post failure')
                console.log(error);
            }
        });
    };

    let list = error.map((item)=> <List.Item>{item}</List.Item>)

    return(
        <Layout>
            <AppHeader/>
            <Content>
                <Row>
                    <Col span={11} style={{marginLeft:'2rem', marginRight: '2rem'}}>
                            <Image src={image} alt="login-page" preview={false}/>
                    </Col>
                    <Col span={11}>
                        <Form style={{marginTop: '15rem', marginLeft: '10rem', maxWidth: '40rem'}}>
                            <Form.Item label='Username'>
                                <Input placeholder='Username' name="username" value={user.username} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item label='Password'>
                                <Input placeholder='Password' name="password" value={user.password} type={'password'} onChange={handleChange}/>
                            </Form.Item>
                            {displayError ? <List>{list}</List> : null}
                            <Form.Item>
                                <Button style={{marginLeft: '20rem', minWidth: '6rem', minHeight:'3rem'}} onClick={handleSubmit}>Login</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default LogInPage;