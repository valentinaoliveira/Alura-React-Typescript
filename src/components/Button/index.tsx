import React from "react";

class Botao extends React.Component{
    render() {
        const estaAtivo = true;
        const style = {
            backgroundColor : estaAtivo ? "Purple" : "Pink"
        }
        return(
            <button style={style}>
                Botâo
            </button>
        )
    }
}

export default Botao;
