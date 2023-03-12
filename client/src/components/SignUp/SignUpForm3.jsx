import {Form, Button, Input} from 'antd';

function SignUpFormThree(){

    return(
        <Form layout='inline' style={{margin:'17rem'}}>
            <Form.Item label='Avatar URL'>
                <Input placeholder='Avatar URL'/>
            </Form.Item>
            <Form.Item>
                <Button type='primary'>Prev</Button>
            </Form.Item>
            <Form.Item>
                <Button type='primary'>Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default SignUpFormThree;