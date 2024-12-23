import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = () => {
        let api = "https://schooldata-theta.vercel.app/student/student";
        axios.post(api, input).then((res) => {
            alert("Data Inserted Successfully");
            setInput({
                name: "",
                Age: "",
                gender: "",
                Class: "",
                mothername: "",
                fathername: ""
            });
        });
    };

    return (
        <>
            
                

            <div className="form-container">
                <h1>Hello! Please Fill Out This Student Database Form</h1>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInput}
                            placeholder="Enter student name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="Age"
                            value={input.Age}
                            onChange={handleInput}
                            placeholder="Enter age"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select name="gender" value={input.gender} onChange={handleInput}>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Class</Form.Label>
                        <Form.Control
                            type="number"
                            name="Class"
                            value={input.Class}
                            onChange={handleInput}
                            placeholder="Enter class"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="mothername"
                            value={input.mothername}
                            onChange={handleInput}
                            placeholder="Enter mother's name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fathername"
                            value={input.fathername}
                            onChange={handleInput}
                            placeholder="Enter father's name"
                        />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Insert;
