import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata] = useState([]);
    const loadData=()=>{
        let api="http://localhost:5000/student";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.name} </td>
                <td> {key.Age} </td>
                <td> {key.gender} </td>
                <td> {key.Class} </td>
                <td> {key.mothername} </td>
                <td> {key.fathername} </td>
              </tr>       
            </>
        )
    })

    return(
        <>
         <h1> Student Database</h1>
         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>Student Name </th>
          <th>Age</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Mother Name</th>
          <th>Father Name</th>
        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>
       
        </>
    )
}
export default Display;