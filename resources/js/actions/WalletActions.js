import { OBTENER_TRANSFERS, AGREGAR_TRANSFERENCIA } from '../types';
import url from '../url';

// Funcion para crear nueva transferencia

export function crearNuevaTransferenciaAction(transfer) {
    return async (dispatch) => {
        try {
            // Insertar en la api
            const resultado = await axios.post(`${url}/api/transfer`, transfer);

            // Si todo sale bien, actualizar el state
            dispatch(agregarTransferencia(resultado.data));
        } catch (error) {
            console.log(error);
        }
    }
}

// Si el producto se guarda en la base de datos
const agregarTransferencia = (transfer) => {
    return ({
        type: AGREGAR_TRANSFERENCIA,
        payload: transfer
    })
}

// Funcion que descarga los productos de la base de datos

export const ObtenerTransferenciasAction = () => {
    return async (dispatch) => {
        try {
            const resultado = await axios.get(`${url}/api/wallet`);
            dispatch(obtenerTransferencias(resultado.data));
        } catch (error) {
            console.log(error);
        }
    }
};

const obtenerTransferencias = (transfers) => {
    return ({
        type: OBTENER_TRANSFERS,
        payload: transfers
    })
}