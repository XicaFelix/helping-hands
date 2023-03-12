import { Form, Input, Button } from "antd";

function SignUpFormTwo(){

    return(
        <Form layout="inline" style={{margin:'8rem'}}>
            <Form.Item label='Username'>
                <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label='Password'>
                <Input placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Prev</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary">Next</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpFormTwo;