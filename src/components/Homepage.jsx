import React from 'react'
import './Homepage.css'
import {  Carousel, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Footer from './Footer'




const Homepage = () => {
  return (
    <div>
       
        <nav class = "navbar navbar-expand-md bg-info ">
    <div class="container-fluid">
        {/* <img src='https://play-lh.googleusercontent.com/6m1A51woBMrtPsnoeDB7H5Wfeq9dNg-6jpAFFaQwGJpsAz_e05DwnEcjJ7V8Ikpif30' style={{width:'5rem'}} /> */}
        <a href = "#" class="navbar-brand"><h2>Easy Pay</h2></a>
        <button class = "navbar-toggler"
                type = "button"
                data-bs-toggle = "collapse"
                data-bs-target="#navmenu">
            <span class = "navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navmenu">
        <ul class = "navbar-nav ms-auto">
            <li class = "navitem">
                <a class="nav-link" href="/" ><h4 className='text-dark'>Home</h4></a></li>
            <li class = "navitem">
                <a class="nav-link" href="#services"><h4 className='text-dark'>Products</h4></a> </li>
                <li class = "navitem">
                <a class="nav-link" href="#footer" ><h4 className='text-dark'>Contact</h4></a></li>   
            <li class = "navitem">
                <a class="nav-link" href="/login"><h4 className='text-dark'>Login</h4></a></li>
            <li class = "navitem">
                <a class="nav-link" href="/signup"><h4 className='text-dark'>Sign Up</h4></a></li>
        </ul>
        </div>
       
       </div>
   </nav>

        {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">React School</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >

          
              <Nav.Item className="ms-5" ><NavLink to='/'>Home</NavLink></Nav.Item>

          

            <Nav.Item className="ms-5" ><Link>Academics</Link></Nav.Item>
              
             <Nav.Item className="ms-5" ><Link>Legacy</Link></Nav.Item>     
           

      
              <Nav.Item className="ms-5" ><NavLink to='/login'>Login</NavLink></Nav.Item>
              
      
              <Nav.Item className="ms-5" ><NavLink to='/signup'>Sign Up</NavLink></Nav.Item>
              

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100 h-80 text-dark"
          src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="First slide"
        />
        <Carousel.Caption style={{color:'black'}}>
          <h3 classname='text-dark'>Bank in your hands</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1595079835357-a94a13cab10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />
         <Carousel.Caption style={{color:'white'}} >
          <h3 classname="text-dark">Pay anytime ! anywhere</h3>
         
        </Carousel.Caption>
        

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption style={{color:'black'}}>
          <h2>Track your transactions</h2>
          {/* <p>
            Track your transactions
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to Paradise on Earth</h1>
              <p>Some Vacations keeps you alive</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://images.unsplash.com/photo-1595079835357-a94a13cab10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to Paradise on Earth</h1>
              <p>Your Happy Place</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to Paradise on Earth</h1>
              <p>Happiness is a well deserved vacation</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}

    <section class = "bg-light text-dark p-5 text-centre">
    <div class = "container">
        <div class = "d-sm-flex">
            <div class = "body"><h1>Money Made<span class="text-danger"> Simple!</span></h1></div>
                <div><p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae corporis dolor? Est sapiente quia qui adipisci quis impedit, a error maiores! Aspernatur ex harum fuga cumque architecto veniam optio, inventore dolores! Fugiat nobis illum est corrupti. Ab animi maxime et dolore magni provident. Cum veniam quidem, quae recusandae omnis praesentium voluptates perspiciatis incidunt accusamus labore hic obcaecati molestias non. Sit, quae?
                </p></div>
               
            </div>
           
          </div>
         
</section>

<div class='card m-5 bg-dark text-light'><h1>Want it?
No more waiting for it <span class="text-info">We offer services at single click</span></h1>
<a href='/signup'><button type="button" class="btn btn-success m-3 btn-lg">get started</button></a></div>

<section>
    <div class = "container" id="services">
        <div class = "col text-center d-flex">
            <div class ="col-md">
                <div class="card" style={{width: '75rem'}}>
                    <img src="https://assets.mspimages.in/hindi/wp-content/uploads/2022/08/Online-shopping.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Online Shopping</p>
                        <a href='/signup'><button type="button" class="btn btn-primary btn-lg">Shop now</button></a>
                      </div>
                </div>
                <div class="card" style={{width: '75rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBGV7NMlW2Itu1OHtH38d33F295zpx2ItoA&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Mobile recharge</p>
                      <a href='/signup'><button type="button" class="btn btn-primary btn-lg">Recharge Now</button></a>
                    </div>
                  </div>
                  <div class="card" style={{width: '75rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Sql2RCrIu4sEGhja77kFqBxZWjuWulFdYQ&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Loans and Mortgages</p>
                      <a href='/regist'><button type="button" class="btn btn-primary btn-lg">Pay Bills and Loans</button></a>
                    </div>
                  </div>

            </div>
        </div>
    </div>
 
</section>


<section id="main" class="bg-dark text-light p-3" >
<div class="container bg-dark">
    <div class="row">
      <div class="col-md">
        <img src = "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb3JleHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" height="400rem" />
        <img src = "https://images.unsplash.com/photo-1613442301239-ea2478101ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height="400rem" />
      </div>
      <div class="col-md">
        <h2></h2>
        <p class="dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugit iure quo quia velit ipsa! Deleniti sunt sit aliquid voluptate accusamus est assumenda unde magni quidem debitis, culpa optio cupiditate rerum voluptates ratione ipsam facere, sed nesciunt, a facilis dolor fugiat possimus suscipit. Totam asperiores similique doloremque cupiditate laudantium voluptatem nam ipsam? Debitis cum voluptatum eum, dolor nihil vero rem soluta. Vero, nisi fuga, eligendi earum voluptate placeat voluptatem aspernatur adipisci reprehenderit, ducimus ullam mollitia doloribus rem numquam sint. Pariatur, recusandae commodi. Necessitatibus facilis asperiores at doloremque fugit maiores ipsa praesentium pariatur atque tempora laboriosam quas possimus unde, doloribus nemo.</p>
        <h2>Build Long-term Wealth<br /><span class="text-info">" & Achieve your Goals" </span></h2>
      </div>
    </div> 
    </div>

</section>
      
<div class="grid text-center bg-info p-5 " id="footer">

<div class="container-fluid p-5">
    <div class="row">
      <div class="col">
        <h3>useful Link</h3>
        <p>Get help</p>
        <p>Gift Card</p>
        <p>Testimonials</p>
      </div>
      <div class="col order-5">
          
        <h3>Contact Details</h3>
        <p>Easypay@Customersupport.com</p>
        <p>1600 600 600 600</p>
        <p>1800 600 600 600</p>
    </div>
      <div class="col order-1">
        <h3>EasyPay.com</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia quas repellat perspiciatis magnam est tempore earum iste esse at.</p>
    </div>
    </div>
  </div>

 <div>
<div class="g-col-6 m-10px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, amet.</div>
<div class="g-col-6">All copyrights are reserved to Easy Pay</div>
</div>
</div>
      



      {/* <Footer /> */}

            


    </div>
  )
}

export default Homepage