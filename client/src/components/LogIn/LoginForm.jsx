import { Button, Form, Input } from "antd";

function LoginForm(){


    return(
        <Form>
            <Form.Item label='Username'>
                <Input placeholder='Username'/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder='Password'/>
            </Form.Item>
            <Form.Item>
                <Button >Login</Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;