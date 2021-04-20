import { OBTENER_TRANSFERS, AGREGAR_TRANSFERENCIA } from '../types';
// Cada reducer tiene su state
const initialState = {
    money: 0.0,
    transfers: [],
    error: null,
    form: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case OBTENER_TRANSFERS:
            return { ...state, transfers: payload.transfers, money: payload.money }
        case AGREGAR_TRANSFERENCIA:
            const dinero = parseInt(state.money, 10) + parseInt(payload.amount, 10);
            return { ...state, money: dinero, transfers: [...state.transfers, payload] }
        default:
            return state
    }
}
