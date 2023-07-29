import { useState, useContext } from 'react';


import {Form, Button, Input} from 'antd';
import { UserContext } from '../../Contexts/UserProvider';

function SignUpFormThree({setPage, signupDet, setSignupDet}){

    const {setCurrentUser, currentUser, setLoggedIn} = useContext(UserContext);

    // keep track of sign up errors
    const [errors, setErrors]= useState([]);

    function handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:3000/signup',{
            method: "POST",
            headers: { "Content-Type": "application/json",
            },                                                                                                                                                                                                                                                       
            body: JSON.stringify(signupDet),
            }).then((resp)=>{
                if(resp.ok){
                    resp.json().then((user)=> {
                        console.log(user);
                        setCurrentUser(user);
                        setLoggedIn(true);
                        console.log('currentUser:', currentUser);
                    });
                }else{
                    resp.json().then((error)=>{
                        setErrors(error.errors);
                        console.log('errors:', errors);
                    });
                }
                
             });
        }

    // track user avatar_url
    function handleChange(event){
        setSignupDet({...signupDet,
            [event.target.name] : event.target.value
        });
        console.log(signupDet);
    }

    return(
        <>
        {errors.length ? <h2>`${errors}`</h2>: null}
        <Form layout='inline' style={{margin:'17rem'}}>
            <Form.Item label='Avatar URL'>
                <Input placeholder='Avatar URL' name='avatar_url' value={signupDet.avatar_url} onChange={handleChange}/>
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={()=> setPage(2)}>Prev</Button>
            </Form.Item>
            <Form.Item>
                <Button type='primary' onClick={handleSubmit}>Submit</Button>
            </Form.Item>
        </Form>
        </>
    );
}

export default SignUpFormThree;