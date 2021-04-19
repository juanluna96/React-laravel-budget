import React from 'react'

const Transfer = ({ transferencia }) => {
    const { amount, description } = transferencia;
    return (
        <tr>
            <td className="text-center">{ description }</td>
            <td className="text-center">{ amount }</td>
        </tr>
    )
}

export default Transfer
