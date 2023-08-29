/* import { BrowserRouter, Route, Routes } from 'react-router-dom' */
import Home from '../pages/Home/Home'
import { PokedexPage } from '../pages/PokedexPage/PokedexPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedexPage' element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router