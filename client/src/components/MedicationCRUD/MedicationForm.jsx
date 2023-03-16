import { Form, Input, Button, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';

function MedicationForm(){

    return(
        <Space direction='vertical' size={'large'} style={{margin: '2rem', display: 'block'}}>
        <Form>
            <Form.Item label='Medication Name' >
                <Input placeholder='Medication Name'/>
            </Form.Item>
            <Form.Item label='Dosage'>
            <Select>
                <Option value='mg'>MG</Option>
                <Option value='ml'>ML</Option>
                <Option value= 'puff'>Puff</Option>
            </Select>
            </Form.Item>
            <Form.Item label='Times per Day'>
                <Input placeholder='Times per Day' />
            </Form.Item>
            <Form.Item label='Times per Week'>
                <Input placeholder='Times per Week' />
            </Form.Item>
            <Space align='center' style={{margin: 'auto', width:'50%'}}>
                <Button>Add</Button>
                <Button>Delete</Button>
            </Space>
        </Form>
        </Space>
    );

}

export default MedicationForm;