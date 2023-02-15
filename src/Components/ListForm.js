import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import axios from 'axios';

const ListForm = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [file,setFile]= useState();
  const [updateOption,setUpdateOption] = useState(false)


  useEffect(() => {
    setLoading(true)
    form.resetFields()
    console.log(props.updateValue);
    if(props.updateValue._id){
      form.setFieldsValue(props.updateValue)
      setUpdateOption(true)
    }else{
      setUpdateOption(false)
    }

    setTimeout(()=>{
          setLoading(false)
    },2000)
  }, []);

    // const [data, setData] = useState({});
    const onFinish = (value)=>{
            console.log(value);
           
            let url=""
            if(props.updateValue._id){
              url="http://localhost:5000/api/testing/update"
              value.id=props.updateValue._id
            }else{
              url="http://localhost:5000/api/testing/addData"
            }
            let formData = new FormData()
            formData.append('name',value.name)
            formData.append('age',value.age)
            formData.append('address',value.address)
            if(file){
              formData.append('dp',file)
            }
            axios.post(url,formData).then((response)=>{
                console.log(response);
                alert(response.data.message);
                setUpdateOption(false)
                form.resetFields();
                props.getData()
                props.close()
            }).catch((err)=>{
                console.log(err);
            })
    }
  //   const updateData=(data)=>{
  //     axios.post("http://localhost:5000/api/testing/update",data).then((response)=>{

  //     }

  //     ).catch()
  // }
const fileUpload=(e)=>{
  console.log(e.target.files);
  setFile(e.target.files[0])
}
    const onFinishFailed = (error)=>{
            console.log(error);
    }
    return (
      <>
      {loading? <div><Spin /></div>:
      <div>
             <Form
      name="dataForm"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}

    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    <input type='file' onChange={fileUpload}/>
        
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button  onClick={()=>{props.close(); form.resetFields()}} >
          Cancel
        </Button>
      </Form.Item>
    </Form>
    {updateOption}
        </div>
      }
     
       
      </>
       
    );
}

export default ListForm;
