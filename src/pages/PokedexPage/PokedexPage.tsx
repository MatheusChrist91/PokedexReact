import React, { useContext } from 'react'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { PokemonCardContext } from '../../context/PokemonCardContext'
import * as S from './styles'
import  Header  from '../../components/Header/Header'

export const PokedexPage = () => {

  const { pokemonCart } = useContext(PokemonCardContext)
  

  return (
    <div>
      <Header />
      <S.ContainerCard>
        {pokemonCart.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types[0].type.name || 'normal'}
            id={pokemon.id}            
          />
        ))}
      </S.ContainerCard>
    </div>
  )
}