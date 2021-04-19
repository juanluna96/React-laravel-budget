import React, { useEffect } from 'react'
import Transfer from './Transfer';

// Actions de redux
import { ObtenerTransferenciasAction } from '../../actions/WalletActions';
import { useDispatch, useSelector } from 'react-redux';

const ListadoTransfers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la api
        const cargarProductos = () => {
            return dispatch(ObtenerTransferenciasAction());
        }
        cargarProductos();
    }, []);

    const transferencias = useSelector(state => state.wallet.transfers);

    return (
        <div className="mx-auto m-t-md col-md-10">
            <table className="table mt-3">
                <thead>
                    <tr className="bg-primary">
                        <td className="text-center text-white font-weight-bold">Transferencia</td>
                        <td className="text-center text-white font-weight-bold">Cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        transferencias.map((transferencia) => {
                            return (<Transfer transferencia={ transferencia } key={ transferencia.id }></Transfer>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListadoTransfers
