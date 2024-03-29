import { formatearFecha } from '../helpers';
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, fecha, id } = gasto;
  const diccionarioIconos = {
    ahorro: '/img/icono_ahorro.svg',
    comida: '/img/icono_comida.svg',
    casa: '/img/icono_casa.svg',
    gastos: '/img/icono_gastos.svg',
    ocio: '/img/icono_ocio.svg',
    salud: '/img/icono_salud.svg',
    susripciones: '/img/icono_susripciones.svg',
  };
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => eliminarGasto(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img src={diccionarioIconos[categoria]} alt={categoria} />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>
                Agregado el: <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
