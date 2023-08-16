import React from 'react'
import { Button, Form, Input, Card, Image } from 'antd';
import '../login/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate(); 
const onSumbit = () => {
        console.log('Success:');
        navigate('/profile/123');
      };      

  return (
    <div className='loginpage-bg'>
    <div className='center-container'>
    <Card
    title="Login"
    bordered={false}
    style={{
      width: 600,
      height: 400
    }}
  >
  <Image
  style={{paddingLeft:'175px'}}
  preview={false}
  src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png'
  />
    <Form
    className='login-form'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      padding: '40px',
      marginRight: '74px',
      marginTop: '30px'
    }}
    initialValues={{
      remember: true,
    }}
    autoComplete="off"
    onFinish={onSumbit}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  </Card>
  </div>
    </div>
  )
}

export default Login