import React from 'react'
import { useSelector } from 'react-redux'

const Wallet = () => {
    const money = useSelector(state => state.wallet.money);
    return (
        <div className="col-md-12-m-t-md">
            <p className="my-5 font-italic title text-primary h1 font-weight-bold"> $ { money } </p>
        </div>
    )
}

export default Wallet
