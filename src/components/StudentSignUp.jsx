import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';





const StudentSignUp = () => {
    // Getting all the userinputs as a variable    

    const [userid, setUserId] = useState(``);
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [mobNo, setMobNo] = useState(``);
    const [password, setPassword] = useState(``);
    const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();

    var [Users, setUsers] = useState([]);
    // const [statusCode, setStatusCode] = useState(0);
    // const [error, setError] = useState(``)
    const navigate = useNavigate();

    const RouteToLoginPage = () => {
        navigate('/login')
    }

    const RouteToHomePage = () => {
        navigate('/')
    }


    var userid_exist;
    var email_exist;


    //Regex Variable to compare
    var regExEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    var regexUsername = /[A-Za-z0-9]{3,30}/
    var regexName = /[A-Za-z]{3,30}/
    var regex10digits = /^[0-9]\d{09}$/ // to validate phone no 
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/

    useEffect(() => {

        axios.get(`http://localhost:8080/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))

    })


    for (let i = 0; i < Users.length; i++) {
        if (userid === Users[i].id) {

            userid_exist = true
            // alert("username already exist")
        }

    }

    for (let i = 0; i < Users.length; i++) {
        if (email === Users[i].emailid) {

            email_exist = true
            // alert("username already exist")
        }

    }

    const SignUp = () => {
        // async function SignUp(event){
        // event.preventDefault();
        // if (!regexUsername.test(userid)) {
        //     alert(`Userame length must be between 3 -20 characters, Only Alpha-numeric allowed`)
        // }

        // else if (userid_exist) {
        //     alert(`Username already exist. Please use a different a username to continue`)
        // }

        // else if (!regexName.test(name)) {
        //     alert(`Please enter a valid name use only alphabets`)

        // }

        // else if (!regExEmail.test(email)) {
        //     alert(`Please enter a valid email id`)

        // }
        // else if (email_exist) {
        //     alert(`Email ID already exist. Please use a different email id to continue or Login`)
        // }
        // else if (!regex10digits.test(mobNo)) {
        //     alert(`Please Enter a valid 10 digit mobile number`)
        // }
        // else if (!regExPwd.test(password)) {
        //     alert(`Please create a strong password`)
        // }



        // else {

        if(userid_exist)
        {
            alert("user already exists");
        }
        else{
            var newUser = {
                "id": userid,
                "name": name,
                "emailid": email,
                "mobno": mobNo,
                "password": password
            }


            axios.post(`http://localhost:8080/users`, newUser)
                .then(response => console.log(response))
                .catch(err => console.log(err))

            navigate("/login")
            alert("Sign Up successful. Redirecting to login...")

        
        }
    }



    return (
        
    <>
        <div>
            
        </div>




        <div className='container p-5 bg-light col-md-8' >
            <Row className="mt-5">
                <Col lg={8} md={6} sm={12} className="p-3 m-auto shadow-sm rounded-lg bg-info text-dark">
                    <Form onSubmit={handleSubmit(SignUp)}>
                        <h4 className='text-center text-light' >User Sign Up</h4>
                        <h6 className='mb-3 text-center ' >Welcome to world of digital money</h6>
                        {/* <FloatingLabel controlId="floatingInput" label="user id" className="mb-3" >
                            <Form.Control type="text" placeholder="user id" onChange={(e)=> setFirstName(e.target.value) }  />
                            <small>user id length must be between 3 -20 characters, Only Alpha-numeric allowed</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last name" className="mb-3" >
                            <Form.Control type="text" placeholder="Last name" onChange={(e)=> setLastName(e.target.value) } />
                            <small>last name should atleast be 4 characters</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" >
                            <Form.Control type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value) } />
                            <small>user name should atleast be 4 characters</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3" >
                            <Form.Control type="text" placeholder="Address" onChange={(e)=> setAddress(e.target.value) } />
                            <small>Address should atleast be 10 characters</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Account number" className="mb-3" >
                            <Form.Control type="number" placeholder="Account number" onChange={(e)=> setAccNumber(e.target.value) }  />
                            <small>Account number should be atleast 8 digits</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value) } />
                            <small>Email should be have @ symbol</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-3" >
                            <Form.Control type="number" placeholder="Mobile Number" onChange={(e)=> setPhonenumber(e.target.value) } />
                            <small>Address should be atleast 10 digits</small>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-2' >
                            <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } />
                            <small>Password should contains special charater and caps</small>
                        </FloatingLabel> */}

                                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} 
                                
                                {...register('useremail', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}

                                isInvalid={!!errors.useremail}
                                onKeyUp={() => {
                                    trigger("useremail");
                                }}

                                />
                                 <Form.Control.Feedback type='invalid'>
                                {errors.useremail?.type === 'required' && 'Email is Required'}
                                {errors.useremail?.type === 'pattern' && 'Please enter a valid email'}

                            </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="userid" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="userid" onChange={(e) => setUserId(e.target.value)} />
                                <Form.Text className="text-muted">
                                userid length must be between 3 -20 characters, Only Alpha-numeric allowed
                                </Form.Text>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                <Form.Text className="text-muted">
                                Please use only alphabets
                                </Form.Text>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Mobile Number" onChange={(e) => setMobNo(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Please Enter Your 10 digit mobile number
                                </Form.Text>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Your password should contain atleast 8 characters. Must Contain 1 uppercase,  1 lowercase, 1 numeric and atleast 1 symbols ( @ # % ^ & - _ )
                                </Form.Text>
                            </FloatingLabel>
                        <div className='text-center span2'>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            <Button type='submit' variant="primary" className='mb-2 mt-2 btn-block' >Sign Up</Button>
                        </div>
                        <div className='text-center'>
                            <h6>Already have an account?</h6>
                            <Button variant="success" className='mb-2 mt-2 btn-block' onClick={RouteToLoginPage} >Login</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
        </>

    )
}

export default StudentSignUp