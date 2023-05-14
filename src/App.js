// import Header from './components/Header'
import Navbar from './components/Navbar'
import { AuthContextProvider } from '.././src/Context/AuthContext';
import Account from './Pages/Account';
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/">
          {/* <Route index element={<Header />}/> */}
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
            }/>

          </Route>
    

        </Routes>
      </BrowserRouter>

      </AuthContextProvider>
    
     
    </div>
  );
}

export default App;
