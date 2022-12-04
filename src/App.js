
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import Homepage from './components/Homepage';
// import Registration from './components/Registration';
import StudentLogin from './components/StudentLogin';
import StudentSignUp from './components/StudentSignUp';
import { useEffect, useState } from 'react';
import authService from './Auth/AuthService';




function App()
 {
//   const [currentUser, setCurrentUser] = useState(undefined);

//   useEffect(() => {
//     const user = authService.getCurrentUser();

//     if (user) {
//       setCurrentUser(user);
//     }
//   }, []);
  return (
    <div>
      {/* <StudentSignUp />
      <StudentLogin /> */}
      

      <Routes>
        
          <Route path='/' element={ <Homepage /> } />
          <Route path='/login' element={<StudentLogin />} />
          <Route path='/signup' element={<StudentSignUp />} />
          {/* <Route path='/dashboard' element={ <Dashboard /> } /> */}
          {/* <Route path = '/Regist' element={< Registration />} /> */}
          
        
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
      
      </Routes>



    </div>
  );
}

export default App;
