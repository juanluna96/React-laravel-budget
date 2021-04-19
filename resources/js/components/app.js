import React from 'react';
import ReactDOM from 'react-dom';
import ListadoTransfers from './Transfers/ListadoTransfers';
import Wallet from './Wallet';
import FormTransfer from './Transfers/FormTransfer';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

function App() {
    return (
        <Provider store={ store }>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <Wallet></Wallet>
                    <FormTransfer></FormTransfer>
                </div>
                <ListadoTransfers></ListadoTransfers>
            </div>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}