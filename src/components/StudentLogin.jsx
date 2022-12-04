import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { login } from './Features/Userslice';
import bcrypt from 'bcryptjs';


const StudentLogin = () => {
    
    // const [username, setUsername] = useState(``)
    // const [password, setPassword] = useState(``)
    // const [UserDetails, setUserDetails] = useState([])
    // const navigate = useNavigate();

    // const [jwtTokenR, setJwtTokenR] = useState(``)

    // var db_username = ``;
    // var db_email = ``;
    // var username_exists = false;
    // var db_encryptedpwd = ``;
    // var loginValidationStatus = false;

    // const dispatch = useDispatch();

    // const api = axios.create({
    //     baseURL:`http://localhost:8080/users`
    // })

    // useEffect(() => {
    
    //     api.get(`/`)
    //   .then(res=>setUserDetails(res.data))
    //   .catch(err=>console.log(err))
    
    // })

    // const navigateToSignUp = () => {

    //     navigate("/signup")

    // }


    // const Login = (event) => {

    //     event.preventDefault();
        

    //     if (username === "" || password === "") {
    //         alert("Please fill all the details")
    //     }


    //     var LoginValidationStatus = ""

    //     for (let i = 0; i < UserDetails.length; i++) {
    //         if (username === UserDetails[i].id && password === UserDetails[i].password)
    //         {
    //             // console.log();
    //             // alert("sucess")
    //             LoginValidationStatus = "ok"

    //         }
    //     }

        

    //     if( LoginValidationStatus === "ok" )
    //     {
    //                     alert("login success")
    //                     navigate( "/dashboard" )
    //                 }
    //             else    
    //                 {
    //                     alert("login failed")
                        
    //                 }
    // }

    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);
    // const [jwtTokenR, setJwtTokenR] = useState(``)

    var db_username = ``;
    var db_email = ``;
    var username_exists = false;
    var db_encryptedpwd = ``;
    var loginValidationStatus = false;

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(jwtToken);

    useEffect(() => {

        axios.get(`http://localhost:8080/users`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))

    })
    for (let i = 0; i < userDetails.length; i++) {
        if (username.toLowerCase() === (userDetails[i].id).toLowerCase()) {

            db_username = userDetails[i].userid;
            db_email = userDetails[i].emailid;
            db_encryptedpwd = userDetails[i].password;
            username_exists = true
        }
    }

    async function Login(event) {

        event.preventDefault();
        // 
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)



        if ( username == "" || password == "" ) {
            alert(`Please fill all the details`)
        }
        else if ( !username_exists ){
            alert(`Username doesn't Exist`)
        }
        else if (!loginValidationStatus){
            alert(`Password doesnt match our records`)
        }
        else if (loginValidationStatus) {

            axios.post(`http://localhost:8080/login`, { username, password })
                .then(response => {
                    if(response.data.jwtToken){
                        localStorage.setItem("user", JSON.stringify(response.data));
                    }
                    return response.data
                })


                //     {
                //     localStorage.setItem("user", JSON.stringify(res.data.jwtToken))
                //     setJwtTokenR(res.data.jwtToken)
                //     console.log(res)
                // })
                .catch(err => console.log(err))
            // alert("login success. Navigating to dashboard...")
            
                // setTimeout(() => {
                        
                navigate("/dashboard")  
                window.location.reload();      
                // }, 5000);
            
            }

    }

    const navigateToSignUp = () => {

        navigate("/signup")

    }



    
    return (
        <div className='container-fluid p-5 bg-light'>
            <Row className="mt-5">
                <Col lg={8} md={6} sm={12} className="p-3 m-auto shadow-sm rounded-lg bg-info text-dark">
                    <Form>
                    <h1 className='text-center '> Login</h1>
                        <h4 className='mb-3 text-center ' >Welcome back! to world of Money made Easy</h4>
                        <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3" >
                            <Form.Control type="text" placeholder="User Name" onChange={(e)=> setUsername(e.target.value) } />
                            
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3' >
                            <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } />
                          
                        </FloatingLabel>
                        <div className='text-center span2'>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            <Button type="submit" variant="primary" className='mb-3 mt-2 btn-block' onClick={Login} >Login</Button>
                        </div>
                        <div className='text-center'>
                            <h6>New User? Sign Up </h6>
                            <Button variant="success" className='mb-3 mt-2 btn-block' onClick={navigateToSignUp}  >Sign Up</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default StudentLogin