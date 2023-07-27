import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import ResumeBuilder from './pages/ResumeBuilder'
import Resumes from './pages/Resumes'
import Guide from './pages/Guide'
import Sample from './pages/Sample'
import ResumeDetails from './components/ResumeDetails'
import ResumePrint from './components/ResumePrint'
import NoPage from './pages/NoPage'
import NavBar from './components/NavBar'

/**
 * The whole web application's display.
 * 
 * @returns {div} display of the website
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {window.location.pathname.substring(0, 13) !== "/resume-print" && <NavBar></NavBar>}
      <div className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />=======
          <Route path="/create-resume" element={<ResumeBuilder />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/guide" element={<Guide />}/>
          <Route path="/resume-print/sample" element={<Sample />}/>
          <Route exact path="/resume/:id" element={<ResumeDetails />}></Route>
          <Route exact path="/resume-print/:id" element={<ResumePrint />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;