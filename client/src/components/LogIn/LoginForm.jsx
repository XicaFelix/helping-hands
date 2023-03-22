import { Button, Form, Input } from "antd";

function LoginForm({user, setUser}){


    // track username and password
    function handleChange(event){
        setUser({...user, 
            [event.target.name]: event.target.value
            });
            console.log('user:', user);
    }

    return(
        <Form style={{marginTop: '15rem', marginLeft: '10rem', maxWidth: '40rem'}}>
            <Form.Item label='Username'>
                <Input placeholder='Username' name="username" value={user.username} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder='Password' name="password" value={user.password} type={'password'} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button style={{marginLeft: '20rem', minWidth: '6rem', minHeight:'3rem'}}>Login</Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;