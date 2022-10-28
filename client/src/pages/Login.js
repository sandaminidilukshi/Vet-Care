import React from 'react'
import {Button, Form, Input} from 'antd'
import "antd/dist/antd.min.css";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
const onFinish = async (values)=>{
    

    try{
          
         const response = await axios.post('/api/users/login', values);
         console.log("values");
        if (response.data.success) {
            toast.success(response.data.message);
            toast("redirecting to Home page");
            localStorage.setItem("token",response.data.token);
            navigate("/");
        }
        else {
            toast.error(response.data.message);
        }
    }
    catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
};



    return (
        <div className='authentication'>
            <div className='authentication-form card p-4'
            >
                <h1 className='card-title'>Welcome Back</h1>
                <Form layout='vertical' onFinish={onFinish}>
                   

                    <Form.Item label='Email' name='email'>

                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Pasword' type='password' />
                    </Form.Item>
                    <Button className='primary-button my-3' htmlType='submit'>LOGIN</Button>
                    <Link to='/register' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
                </Form>
            </div>
        </div>
    )
}

export default Login