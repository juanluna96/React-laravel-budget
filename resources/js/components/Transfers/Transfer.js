import React from 'react'

const Transfer = ({ transferencia }) => {
    const { amount, description } = transferencia;

    const tipoTransferencia = (cantidad) => {
        const tipo_transferencia = cantidad > 0 ? "text-success" : "text-danger";
        return tipo_transferencia;
    }

    return (
        <tr>
            <td className="text-center">{ description }</td>
            <td className={ `${tipoTransferencia(amount)} text-center` }>{ amount }</td>
        </tr>
    )
}

export default Transfer
