import {userState, useState} from "react";

function BuscadorEnVivo(){
    const [textoBusqueda, setTextoBusqueda] = useState('');

    const manejarCambio = (e)=>{
        setTextoBusqueda(e.tarjeta.value);
    };

    const limpiar = ()=>{
        setTextoBusqueda('');
    };

    return(
        <div style={{background: "#fff", pading: "20px", borderRadius:"8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom:"20px"}}>
            <input type="text" />
            <p></p>
            {textoBusqueda.length > 0 && (
                <button></button>
            )}
        </div>
    )
}

export default BuscadorEnVivo;