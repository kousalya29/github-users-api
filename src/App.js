import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
    <Router>

      <Routes>
        <Route path='/' exact element={<PrivateRoute><Dashboard /> </PrivateRoute>}></Route>
        <Route path='/login' element={<Login />} />  
        <Route path='*' element={<Error />} />
      </Routes>

    </Router>
    </AuthWrapper>
  );
}

export default App;
