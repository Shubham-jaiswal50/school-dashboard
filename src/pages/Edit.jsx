import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Edit=()=>{

    const [mydata, setMydata]=useState({});
    const navigate = useNavigate();
const {id} =useParams();
// alert(id)
const loadData=()=>{
    let api=`https://schooldata-theta.vercel.app/student/${id}`;
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


const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`https://schooldata-theta.vercel.app/student/${id}`;
    await axios.patch(api, mydata).then((res)=>{
        alert("Data succesflly updated!!!");
        console.log("navigate")
        navigate("/display");

    })
}

    return(
        <>
       <div className="form-container">
    <h1>Update Your Record</h1>
    <form>
        <div className="form-group">
            <label htmlFor="name">Edit Name:</label>
            <input type="text" id="name" name="name" value={mydata.name} onChange={handleInput} />
        </div>

        <div className="form-group">
            <label htmlFor="age">Edit Age:</label>
            <input type="number" id="age" name="Age" value={mydata.Age} onChange={handleInput} />
        </div>

        <div className="form-group">
            <label htmlFor="gender">Select Gender:</label>
            <select id="gender" name="gender" value={mydata.gender} onChange={handleInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="mothername">Mother Name:</label>
            <input type="text" id="mothername" name="mothername" value={mydata.mothername} onChange={handleInput} />
        </div>

        <div className="form-group">
            <label htmlFor="fathername">Father Name:</label>
            <input type="text" id="fathername" name="fathername" value={mydata.fathername} onChange={handleInput} />
        </div>
        {/* className="submit-btn" */}
        <button  onClick={handleSubmit}>Update Save!</button>
    </form>
</div>

        
        </>
    )

}
export default Edit