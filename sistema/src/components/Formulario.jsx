import useClima from "../hooks/useClima";


const Formulario = () => {

   const { busqueda, datosBusqueda } = useClima()

   const { ciudad, pais } = busqueda

   return (
      <div className='contenedor'>
         <form>
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