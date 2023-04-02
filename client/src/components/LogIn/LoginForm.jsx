import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Form, Input } from "antd";

function LoginForm({user, setUser, currentUser, setCurrentUser}){
    const navigate = useNavigate();

    const [error, setError] = useState([]);


    // track username and password
    function handleChange(event){
        setUser({...user, 
            [event.target.name]: event.target.value
            });
    };

    // submit post request to log user in
    function handleSubmit(event){
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
                    setCurrentUser(user)
                    console.log(currentUser);
                });
                
                navigate('/home');
            }else{
                resp.json().then((error)=> setError(error.errors));
                console.log('post failure')
                console.log(error);
            }
        });
    };

    return(
        <Form style={{marginTop: '15rem', marginLeft: '10rem', maxWidth: '40rem'}}>
            <Form.Item label='Username'>
                <Input placeholder='Username' name="username" value={user.username} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder='Password' name="password" value={user.password} type={'password'} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button style={{marginLeft: '20rem', minWidth: '6rem', minHeight:'3rem'}} onClick={handleSubmit}>Login</Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;