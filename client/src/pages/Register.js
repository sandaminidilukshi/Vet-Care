import React from 'react'
import { Button, Form, Input } from 'antd'
import "antd/dist/antd.min.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
function Register() {

    const onFinish = async (values) => {
        try {
            console.log(values);
             const response = await axios.post('/api/users/register', values);
             console.log("values");
            if (response.data.success) {
                toast.success(response.data.message);
            
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
                <h1 className='card-title'>Nice To Meet U</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>

                        <Input placeholder='Name' />
                    </Form.Item>

                    <Form.Item label='Email' name='email'>

                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Pasword' type='password' />
                    </Form.Item>
                    <Button className='primary-button my-3' htmlType='submit'>REGISTER</Button>
                    <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>
                </Form>
            </div>
        </div>
    )
}

export default Register