import { useEffect } from 'react'
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom'
import { Landing, Design } from 'Pages'
import { URLS } from 'Lib'

export const Router: React.FC = () => {
  const RedirectToRoot = () => {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/')
    }, [navigate])
    return null
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page Route   */}
        <Route path={URLS.HOME} element={<Landing />} />
        {/* Design Page Route */}
        <Route path={URLS.DESIGN} element={<Design />} />

        {/* Redirect */}
        <Route path="*" element={<RedirectToRoot />} />
      </Routes>
    </BrowserRouter>
  )
}
