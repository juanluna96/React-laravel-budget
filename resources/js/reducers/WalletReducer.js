import { OBTENER_TRANSFERS } from '../types';
// Cada reducer tiene su state
const initialState = {
    money: 0.0,
    transfers: [],
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case OBTENER_TRANSFERS:
            return { ...state, transfers: payload.transfers }
        default:
            return state
    }
}
