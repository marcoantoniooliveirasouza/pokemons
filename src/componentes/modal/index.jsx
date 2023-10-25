import { Button, Modal } from "@material-ui/core";
import { useContext } from "react";
import { HomeContex } from "../../contexts/homeContex";



export const ModalPokemons = () =>{
    const {handleClose, handleOpen, open, pokemonModal} = useContext(HomeContex)
    console.log(pokemonModal)
    return(
    <div>
     
      <Modal 
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      open={open} onClose={handleClose}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // position: "absolute",
            width: 280,
            backgroundColor: "white",
            borderRadius:10,
            boxShadow: 5,
            padding: 16,
            marginTop:10,
          }}
        >
          <h2>{pokemonModal.name}</h2>
          {/* <img src={pokemonModal['sprites']['front_default']} alt=""/> */}
          {/* // <img src={pokemonModal['sprites']['back_default']} alt=""/> */}
         
          <Button variant="contained" color="primary" onClick={handleClose}>
            Fechar
          </Button>
        </div>
      </Modal>

    </div>
  );
}