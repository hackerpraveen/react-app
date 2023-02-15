import React, { useEffect, useState } from 'react';
import './Component.css'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const FnPage = ({aData,bData}) => {

    const [text,setText] = useState('This is Function component')
    const [data, setData] = useState({
        username:'',
        password:''
});
   
    const click = ()=>{
        let a  = "button clicked"
        alert(a)
    }
    const inputOnChange=(event)=>{
        // console.log(e.target.value); 
            setText(event.target.value)
    }

    const divStyle = {
        backgroundColor:"#000",
        fontSize:"30px"       
    }
//useState
//useEffect
const onFinish = (values) => {
    console.log('Success:', values);//{username:'',password:''}
    let a =10
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${a}`).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err.message);
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <>
        <div className='container pt-5' >
       

        </div>
        </>
    );
}

export default FnPage;
 <Form
      name="loginForm"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="UserID"
        name="userId"
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
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your Title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        // label="Completed"
        name="completed"
        valuePropName="checked"

      >
        <Checkbox>Completed </Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>