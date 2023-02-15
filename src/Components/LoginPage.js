import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';


const LoginPage = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onFinish = (value)=>{
        axios.post("http://localhost:5000/api/user/login",value).then((response)=>{
            if(response.data.token){
                localStorage.setItem("token",`jwt ${response.data.token}`)
            }
            alert(response.data.message)
            props.login()
        }).catch((err)=>{
                console.log(err);
        })
    }
    const onRegister = (value)=>{
        axios.post('http://localhost:5000/api/user/register',value).then((response)=>{
            alert(response.data.message)
            setIsModalOpen(false)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
      <div className='h-100'>
        <div className='ms-auto me-auto'>
             <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={(err)=>{console.log(err);}}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        login
      </Button>
      <Button type="link"  onClick={()=>setIsModalOpen(true)}>
        register
      </Button>
    </Form.Item>
  </Form>
  <Modal title="User Register" open={isModalOpen} onCancel={()=>setIsModalOpen(false)} footer={null}>  
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onRegister}
    onFinishFailed={(err)=>{console.log(err);}}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your Name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Phone Number"
      name="phone"
      rules={[{ required: true, message: 'Please input your Phone Number!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      
      <Button  type="primary" htmlType="submit" >
        submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
        </div>
        </div>
    );
}

export default LoginPage;
