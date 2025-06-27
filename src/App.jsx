import { Route, Routes } from 'react-router-dom'
import Game from './page/game'
import SelectPlayerPage from './page/selectPlayerPage'
// import SelectPlayerPage from './page/selectPlayerPage'


function App() {

  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center">
      <Routes>
        <Route path='/' element={<SelectPlayerPage />} />
        <Route path='game' element={<Game />} />
      </Routes>
    </main>
  )
}

export default App
