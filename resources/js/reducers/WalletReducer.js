// Cada reducer tiene su state
const initialState = {
    money: 0.0,
    transfers: [],
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}
