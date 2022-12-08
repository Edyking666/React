import logo from './logo.svg';
import './App.css';
import React from 'react';


import Busqueda from './Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import { DirectorioContext, DirectorioProvider } from './Context/DirectorioProvider';
function App(props) {

  // let contactos=[
  //   {
  //    fgsfgsdf nombre:"Edy",
  //     telefono:"1212213",
  //     correo:"edy@gmail.com"
  //   },
  //   {
  //     nombre:"gorge",
  //     telefono:"12123123",
  //     correo:"gorge@gmail.com"
  //   },
  //   {
  //   nombre:"Fabian",
  //     telefono:"12123123",
  //     correo:"gorge@gmail.com"
  //   }
  
  // ]

 
  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
          ({
          contactosFiltrados,
          borrarContacto,
          contadorContacto,
          modal,
          setModal
          })=>(
          <center>
            <React.Fragment>
              
    <h1>DIRECTORIO [{contadorContacto}]</h1>
    <Busqueda/>
    <button onClick={()=>{setModal(true)}}>Agrega Contacto</button>
    <ListaContactos>
      {
        contactosFiltrados.map((contacto)=>{
          return(
            <Contacto 
            nombre={contacto.nombre} 
            correo={contacto.correo}
            telefono={contacto.telefono}
            borrarContacto={()=>{borrarContacto(contacto.nombre)}}
            />
          )
        })
      }
    </ListaContactos>
    {modal && <AgregaContacto />}
  
    </React.Fragment>
    </center>
    )
}

      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}




export default App;
