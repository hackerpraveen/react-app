import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';

import TableList from './TableList';
import ListForm from './ListForm';

const MainPage = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [updateValue, setUpdateValue] = useState({});

    useEffect(() => {
        getData()
      }, []);

    const getData=()=>{
        axios.get("http://localhost:5000/api/testing/allData",{headers:{authorization:localStorage.getItem('token')}}).then((response)=>{
            console.log(response,"......")
            setUpdateValue({})
            setTableData(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const deleteData = (id)=>{
        axios.post("http://localhost:5000/api/testing/delete",{id:id}).then((response)=>{
            alert(response.data.message)
            getData()
        })
        .catch((err)=>{
                console.log(err);
        })
    }
    
  
  
    return (
        <div>
            <button className='btn btn-primary' onClick={()=>{props.logout()}}>Logout</button>
            <TableList data={tableData} setUpdateValue={(data)=>{setUpdateValue(data);setIsModalOpen(true)}} deleteData={deleteData}/>
            <button className='btn btn-info' onClick={()=>setIsModalOpen(true)}>Add Data</button> 
            <Modal title="Add New Data" open={isModalOpen} onCancel={()=>setIsModalOpen(false)} footer={null}>  
            <ListForm close={()=>setIsModalOpen(false)} getData={getData} updateValue={updateValue}/>
      </Modal>
        </div>
    );
}

export default MainPage;
