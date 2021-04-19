import { OBTENER_TRANSFERS } from '../types';

// Funcion que descarga los productos de la base de datos

export const ObtenerTransferenciasAction = () => {
    return async (dispatch) => {
        try {
            const resultado = await axios.get('http://localhost:8000/api/wallet');
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