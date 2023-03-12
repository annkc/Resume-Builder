import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import ResumeBuilder from './pages/ResumeBuilder'
import Resumes from './pages/Resumes'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<ResumeBuilder />} />
          <Route path="/view" element={<Resumes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;