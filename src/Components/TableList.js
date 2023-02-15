import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const TableList = (props) => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render:(_,data,index)=>{
                return index+1
            },
          },
          {
            title:'Display pic',
            key:'dp',
            render:(_,data)=>{
                return (data.dp?<img width={50} height={50} src={`http://localhost:5000/${data.dp}`}/>:'no image')
            }
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },  {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title:'Action',
            render:(_,data,idx)=>{
              return(
                <div className='d-flex'>
                <button className='btn btn-warning' onClick={()=>props.setUpdateValue(data)} >Edit</button>
                <button className='btn btn-info ms-5' onClick={()=>props.deleteData(data._id)}  >Delete</button>
                </div>
              )
            }

          }
    ]

    
 
   
    return (
        <div>
           <Table columns={columns} dataSource={props.data} />
        </div>
    );
}

export default TableList;
