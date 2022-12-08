import React from "react";


const DirectorioContext=React.createContext();
function DirectorioProvider(props){

    let contactos,contadorContacto

  if(!localStorage.contactos)
  {
    localStorage.setItem("contactos",JSON.stringify([]));
    contactos=[];
  }
  else
  {
    contactos=JSON.parse(localStorage.contactos);
  }

let [textoBusqueda,setTextoBusqueda]=React.useState('');
  let [contactosState,setContactosState]=React.useState(contactos);
  let [modal, setModal]=React.useState(false);
  let contactosFiltrados=[];

  function borrarContacto(name)
  {
    let indice=contactosState.findIndex((contacto)=>{
      return contacto.nombre==name;
    });
    let contactosTemporal=[...contactosState];
    contactosTemporal.splice(indice,1);
    localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
    setContactosState(contactosTemporal);
    console.log(indice);
  }

  function guardaContacto(contacto){
    let contactosTemporal=[...contactosState];
    contactosTemporal.push(contacto);
    localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
    setContactosState(contactosTemporal);

  }
  

  if(textoBusqueda.length>0){
    let textoBusquedalowerCase=textoBusqueda.toLowerCase();
    contactosFiltrados=contactosState.filter((contacto)=>{
      return contacto.nombre.toLowerCase().includes(textoBusquedalowerCase);
    })
    
  }
  else{
    contactosFiltrados=contactosState;
  }

    contadorContacto=contactosFiltrados.length;

    return (
        <DirectorioContext.Provider
            value={{
                textoBusqueda,
                setTextoBusqueda,
                contactosFiltrados,
                contactosState,
                setContactosState,
                 borrarContacto,
                contadorContacto,
                modal,
                setModal,
                guardaContacto,
           }}
           >
            {props.children}
        </DirectorioContext.Provider>
    )
}
    export {DirectorioContext, DirectorioProvider}
