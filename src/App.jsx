import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import ApplicationForm from './pages/application-form/ApplicationForm';
import './App.css'

function App() {
  return (
    <div className='poppins-regular'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/apply" element={<ApplicationForm/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
