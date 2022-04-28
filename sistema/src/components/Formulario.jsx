import { useState } from "react";
import useClima from "../hooks/useClima";


const Formulario = () => {

   const [alerta, setAlerta] = useState('');
   const { busqueda, datosBusqueda, consultarClima } = useClima()
   const { ciudad, pais } = busqueda


   const handleSubmit = (e) => {
      e.preventDefault();

      if (Object.values(busqueda).includes('')) {
         setAlerta('Todos los Campos son Obligatorios')
         return
      }
      consultarClima(busqueda)

   }

   return (
      <div className='contenedor'>
         {alerta && <p>{alerta}</p>}
         <form
            onSubmit={handleSubmit}
         >
            <div className="campo">
               <label htmlFor="ciudad">Ciudad</label>
               <input
                  type="text"
                  id='ciudad'
                  name='ciudad'
                  onChange={datosBusqueda}

               />
            </div>
            <div className="campo">
               <label htmlFor="pais">Ciudad</label>
               <select
                  name="pais"
                  id="pais"
                  onChange={datosBusqueda}
                  value={pais}
               >

                  <option value="">Seleccione un Pais</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">Mexico</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Peru</option>
               </select>
            </div>

            <input type="submit"
               value='Consultar Clima'
            />

         </form>
      </div>
   );
};

export default Formulario;