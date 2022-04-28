import Formulario from './Formulario';
import Resultado from './Resultado';
import useClima from '../hooks/useClima'
import Louding from './Louding';

const AppClima = () => {

   const { resultado, cargando, noResultado } = useClima()
   return (
      <>
         <main class="dos-columnas">
            <Formulario />

            {cargando ? <Louding /> :
               resultado?.name && <Resultado />
            }

         </main>
      </>
   );
};

export default AppClima;