import './UsuarioCard.css'

function UsuarioCard ({nombre,rol,estado,imagen}){

    const claseEstado= estado === 'Activo' ? 'badge-active':'badeg-in'

    return(
        <div>
            <img src="" alt="" srcset="" />
            <div>
                <h3></h3>
                <p></p>
                <span></span>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}
export default UsuarioCard;