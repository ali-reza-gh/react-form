import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';
import Login from './components/signUp/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Navigate to='/SignUp' />} />
      </Routes>

    </div>
  );
}

export default App;
