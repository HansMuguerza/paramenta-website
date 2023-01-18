import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { colors } from './theme';
import { MainContainer, MainContent } from './styles';
import LinksContact from './components/LinksContact/LinksContact';
import Navbar from "./components/ResponsiveNavbar/Navbar"
import Sidebar from "./components/ResponsiveNavbar/Sidebar"
import HomePage from './pages/Home/HomePage';
import TemplatesPage from './pages/Templates/TemplatesPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Toast from "./components/Toast"

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <MainContainer>
      <Toast/>
      <LinksContact/>
      <HashRouter>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <MainContent>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/plantillas' element={<TemplatesPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </MainContent>
      </HashRouter>
    </MainContainer>
  )
}

export default App
