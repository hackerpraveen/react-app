import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Emptable = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/testing/allData').then(
      (response)=>{
          console.log(response.data);
          setData(response.data)
      }
    ).catch((error)=>
    console.log(error.message)
    )
  }, []);
    return (
        <div>
            <table class="table">
  <thead>
  {/* sno: "AAA100",
                  name: "Rajan",
                  age: 25,
                  designation: "Software Engineer",
                  location: "Hyderabad", */}
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>

    {data.map((value,index)=>{
        return(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.age} </td>
            <td>{value.address} </td>

          </tr>

        )

    })}
 
   
  </tbody>
</table>
        </div>
    );
}

export default Emptable;
