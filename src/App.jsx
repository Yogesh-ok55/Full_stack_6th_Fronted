
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Login from './pages/Login'
import HandleError from './pages/HandleError'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}> </Route>
        <Route path='*' element={<HandleError/>}></Route>
      </Routes>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
