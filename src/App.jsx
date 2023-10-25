import { ListPokemons } from "./componentes/listPokemons";
import { ModalPokemons } from "./componentes/modal";
import { NavBar } from "./componentes/navBar";

function App() {
  return (
    <div className="App">
      {/* <ModalPokemons/> */}
      
      <NavBar/>
      <ListPokemons/>
    </div>
  );
}

export default App;
