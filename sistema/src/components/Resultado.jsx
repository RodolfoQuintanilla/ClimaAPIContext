import React from 'react';
import useClima from '../hooks/useClima';

const Resultado = () => {

   const Resultado = useClima()


   const { name, main } = Resultado.resultado
   console.log(main);

   const kelvin = 273.15


   return (
      <div>
         <div className="contenedor clima">
            <h2>El Clima de {name} es:</h2>

            <p>
               {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <div className="temp_min_max">
               <p>
                  Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
               </p>
               <p>
                  Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
               </p>
            </div>

         </div>
      </div>
   );
};

export default Resultado;