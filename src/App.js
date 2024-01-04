import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <>
    <Navbar />
    <Container  className='mb-4'> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Container>
    </>
  );
}

export default App;
