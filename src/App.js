import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
