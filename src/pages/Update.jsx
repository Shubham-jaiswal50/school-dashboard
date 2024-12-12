import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate= useNavigate();
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, []); 
    const myDel=async(id)=>{
        let api=`http://localhost:3000/student/${id}`;
        await axios.delete(api).then((res)=>{
            alert("Record Sjuccesfully deleted!");
        loadData();

        })   

        
    }

    const myEdit=(id)=>{
        navigate(`/edit/${id}`);
    }

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
                
                <td>  <a href="#" onClick={()=>{myDel(key.id)}}>
            <MdDelete />
            </a> </td>


            <td>
            <button onClick={()=>{myEdit(key.id)}}>
          <FaEdit />
          </button>
           </td>


            


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
          <th>Delete Data</th>
          <th>Edit Data</th>
        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>
        
        
        
        
        </>
    )

}
export default Update