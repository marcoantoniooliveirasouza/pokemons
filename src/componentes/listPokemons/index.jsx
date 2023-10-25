import { useContext } from "react"
import { HomeContex } from "../../contexts/homeContex"
import { StyledListPokemon } from "./styled"

export const ListPokemons = () =>{
    const {filteredPokemons, setId, handleOpen, unitPokemon} = useContext(HomeContex)
    const setIdAndModal = (pokemon) =>{
        setId(pokemon.id)
        handleOpen()
       
    }
    return(
        <StyledListPokemon>
          <ul>
          {filteredPokemons.map((pokemon)=>(
              <li onClick={() =>{ setIdAndModal(pokemon)}} key={pokemon.name}>
                  <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt="" />
                  <h2>{pokemon.name}</h2>
              </li>
          ))}
      </ul>
        
        </StyledListPokemon>
    )
}
