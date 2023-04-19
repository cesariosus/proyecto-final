
import Header from './components/Header'
import Home from './components/Home'
import Post from './components/Post'
import SobreNosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/conocenos" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
