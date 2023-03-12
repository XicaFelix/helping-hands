import { Form, Input, Button } from "antd";

function LandingForm(){

    return(
        <Form layout="inline" style={{margin:'11rem'}}>
            <Form.Item label='First Name'>
                <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item label='Last Name'>
                <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Next</Button>
            </Form.Item>
        </Form>
    );
}

export default LandingForm;