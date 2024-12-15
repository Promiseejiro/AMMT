import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import ApplicationForm from './pages/application-form/ApplicationForm';
import { Toaster } from 'react-hot-toast';
import './App.css'
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className='poppins-regular'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/apply" element={<ApplicationForm />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  )
}

export default App
