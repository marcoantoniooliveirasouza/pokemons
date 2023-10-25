import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../api";

export const HomeContex = createContext({})

export const HomeProvider = ({children}) =>{
  
    const [pokemons, setPokemons] = useState([])
    const [busca, setBusca] = useState("")
    // const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [filteredTypes, setFilteredTypes] = useState([]);
    const [page, setPage] = useState(1); // Página atual
    const itemsPerPage = 20; // Itens por página


    const [pokemonModal, setPokemonModal] = useState([])
    const [id, setId] = useState()
    const [open, setOpen] = useState(false);
   
    useEffect(() => {
        pokemonsGet();
    
      }, []);
    
      const pokemonsGet = () => {
        const endpoints = [];
        for (let i = 1; i < 150; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
    
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
          .then((responses) => {
            const pokemonData = responses.map((response) => response.data); // Extrair dados corretamente
            setPokemons(pokemonData);
          })
          .catch((error) => console.log(error));
      };

      // const pokemonsGet = () => {
      //   const offset = (page - 1) * itemsPerPage;
      //   const limit = itemsPerPage;

      //   const endpoints = [];
      //   for (let i = 1; i < 150; i++) {
      //     endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}offset=${offset}&limit=${limit}`);
          
      //   }
      //   Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      //       .then((responses) => {
      //         const pokemonData = responses.map((response) => response.data); // Extrair dados corretamente
      //         setPokemons(pokemonData);
      //       console.log(pokemons)
      //     })
      //     .catch((error) => console.log(error));
      // };
      
      
      const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon && pokemon.name && pokemon.name.toLowerCase().includes(busca.toLowerCase())
      
      
      );
      console.log(filteredPokemons)

      
      const handlePageChange = (newPage) => {
        setPage(newPage);
      };

      const unitPokemon = async (data) =>{
        if(id){

            try {
                const response = await api.get(`${id}`, data)
                console.log(response.data)
                setPokemonModal(response.data)
            } catch (error) {
                console.error(error);
            }
          }
        }
        useEffect(() => {
            
            unitPokemon();
        }, [id]);
        console.log(pokemonModal)
      

      console.log(id)  
      
      

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
     

    return(
        <HomeContex.Provider value={{      pokemons,
          busca,
          setBusca,
          filteredPokemons,
          setId,
          handleOpen,
          handleClose,
          open,
          unitPokemon,
          pokemonModal,
          page,
          itemsPerPage,
          handlePageChange,
        }}>
            {children}
        </HomeContex.Provider>
    )
}