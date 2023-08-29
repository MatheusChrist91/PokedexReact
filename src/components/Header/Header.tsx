import * as S from './styles'
import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
//@ts-ignore
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToPokemonListPage } from '../../routes/coordinatos'
import { Pokeball } from 'components/CardPokemon/styles'
import pokebola from '../../assets/pokebola.png'

const Header = () => {

  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.LogoContainer onClick={() => goToPokemonListPage(navigate)}>
          <S.LogoImg src={logo} />
        </S.LogoContainer>
        <S.NavContainer>
         

          <S.AvatarContainer>
            <S.BagPokemon>
              <button
              onClick={() => goToPokedexPage(navigate)}
              ><img src={pokebola} alt="" /></button>
            </S.BagPokemon>
          </S.AvatarContainer>
        </S.NavContainer>
      </S.Container>
    </>
  )
}

export default Header
//a
