import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProblemSolution from './pages/ProblemSolution'
import HowItWorks from './pages/HowItWorks'
import Industries from './pages/Industries'
import About from './pages/About'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/problem-solution' element={<ProblemSolution />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
