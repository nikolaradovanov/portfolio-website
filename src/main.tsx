import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from './pages/HomePage';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
  </BrowserRouter>
)
