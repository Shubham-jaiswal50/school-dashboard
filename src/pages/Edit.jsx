import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Edit=()=>{

    const [mydata, setMydata]=useState({});
const {id} =useParams();
// alert(id)
const loadData=()=>{
    let api=`http://localhost:3000/student/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/student/${id}`;
    axios.put(api, mydata).then((res)=>{
        alert("Data succesflly updated!!!");
    })
}

    return(
        <>
       <div class="form-container">
    <h1>Update Your Record</h1>
    <form>
        <div class="form-group">
            <label for="name">Edit Name:</label>
            <input type="text" id="name" name="name" value={mydata.name} onChange={handleInput} />
        </div>

        <div class="form-group">
            <label for="age">Edit Age:</label>
            <input type="number" id="age" name="Age" value={mydata.Age} onChange={handleInput} />
        </div>

        <div class="form-group">
            <label for="gender">Select Gender:</label>
            <select id="gender" name="gender" value={mydata.gender} onChange={handleInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div class="form-group">
            <label for="mothername">Mother Name:</label>
            <input type="text" id="mothername" name="mothername" value={mydata.mothername} onChange={handleInput} />
        </div>

        <div class="form-group">
            <label for="fathername">Father Name:</label>
            <input type="text" id="fathername" name="fathername" value={mydata.fathername} onChange={handleInput} />
        </div>
        {/* class="submit-btn" */}
        <button  onClick={handleSubmit}>Update Save!</button>
    </form>
</div>

        
        </>
    )

}
export default Edit