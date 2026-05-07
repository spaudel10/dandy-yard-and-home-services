import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SmallEngineRepairPage from './pages/SmallEngineRepairPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/small-engine-repair" element={<SmallEngineRepairPage />} />
      </Routes>
    </BrowserRouter>
  )
}
