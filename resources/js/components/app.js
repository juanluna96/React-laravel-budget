import React from 'react';
import ReactDOM from 'react-dom';
import ListadoTransfers from './Transfers/ListadoTransfers';
import Wallet from './Wallet';
import FormTransfer from './Transfers/FormTransfer';

function App() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <Wallet></Wallet>
                <FormTransfer></FormTransfer>
            </div>
            <ListadoTransfers></ListadoTransfers>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}