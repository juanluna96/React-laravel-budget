import { combineReducers } from 'redux';
import WalletReducer from './WalletReducer';

export default combineReducers({
    wallet: WalletReducer
})
