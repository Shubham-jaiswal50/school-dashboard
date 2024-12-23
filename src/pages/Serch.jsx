import { useState } from "react";
import axios from "axios";

const Serch = () => {
    const [name, setName] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () => {
        let api = `https://schooldata-theta.vercel.app/student/?name=${name}`;
        axios.get(api).then((res) => {
            setMydata(res.data);
            if (res.data.length <= 0) {
                alert("Data not found");
                setName("");
            } else {
                setName("");
            }
        });
    };

    const ans = mydata.map((key) => {
        return (
            <div className="result-container">
                <p><strong>Name:</strong> {key.name}</p>
                <p><strong>Age:</strong> {key.Age}</p>
                <p><strong>Gender:</strong> {key.gender}</p>
                <p><strong>Class:</strong> {key.Class}</p>
                <p><strong>Mother Name:</strong> {key.mothername}</p>
                <p><strong>Father Name:</strong> {key.fathername}</p>
            </div>
        );
    }); 
              return(
                <>
                <style>
                
                {`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f8ff;
                    margin: 0;
                    padding: 0;
                }

                h1 {
                    text-align: center;
                    color: #333;
                    margin-top: 20px;
                }

                .search-container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .search-container input[type="text"] {
                    width: calc(100% - 120px);
                    padding: 10px;
                    margin-right: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }

                .search-container button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .search-container button:hover {
                    background-color: #0056b3;
                }

                .result-container {
                    margin: 20px 0;
                    padding: 15px;
                    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    color: #333;
                }

                .result-container p {
                    font-size: 18px;
                    margin: 5px 0;
                    font-weight: bold;
                }

                .result-container p strong {
                    color: #555;
                }
                `}
            </style>

            <div className="search-container">
                <h1>Search Student</h1>
                <div>
                    Enter a student name:
                    <input
                        type="text"
                        name="year"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Enter student name"
                    />
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <hr />
                {ans}
            </div>
        </>
    );
};

export default Serch;
