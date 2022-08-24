import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>}>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;