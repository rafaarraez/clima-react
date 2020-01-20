import React, { useState } from 'react';

function Formulario({datosConsulta}) {


    //state del componente
    // busqueda = state, guardarBusqueda = this.setState({});
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const handleChange = e => {
        // Cambia el state
        guardarBusqueda({
            //tomar una copa del state actual
            ...busqueda,
            //guardar nuevos valores
            [e.target.name]: e.target.value
        });
        
    }

    const consultaClima = e => {
        e.preventDefault();

        //pasar datos hacia el componente principal la busqeuda del usuario
        datosConsulta(busqueda);
    }
    
    return(
        <form
            onSubmit={consultaClima}
        >
            <div className="input-field col s12" >
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
                
            </div>

            <div className="input-field col s12" >
                <select name="pais" onChange={handleChange}>
                    <option value="">Selecciona un país:</option>
                    <option value="US">Estados Unidos</option>
                    <option value="VE">Venezuela</option>
                    <option value="AR">Argentina</option>
                    <option value="MX">Mexico</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CL">Colombiaaa</option>
                </select>
            </div>

            <div className="input-field col s12">
               <input 
                    className="waves-effect waves-light btn-large btn-block yellow accent-w"
                    type="submit"
                    value="Buscar Clima"
               />
            </div>
        </form>
    );
}

export default Formulario;