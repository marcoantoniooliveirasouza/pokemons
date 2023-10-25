import { useContext, useEffect } from "react"
import { HomeContex } from "../../contexts/homeContex"
import { StyledNavBar } from "./styled"

export const NavBar = () =>{
    const{setBusca, busca,} = useContext(HomeContex)
                     
  
    console.log(busca)
    return(
        <StyledNavBar>
            <div>
                <img src="./image/pokemon-768.webp" alt="" />
                <form >
                    <input value={busca} onChange={(e) => setBusca(e.target.value)} type="text" placeholder="pesquisar..."/>
                </form>
            </div>
        </StyledNavBar>
       
    )
}