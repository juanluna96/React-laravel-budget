import React from 'react'
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Titulo = styled.p`
  font-size: 80px
`;

const Wallet = () => {
    const money = useSelector(state => state.wallet.money);
    return (
        <div className="col-md-12-m-t-md">
            <Titulo className="my-5 font-italic text-primary h1 font-weight-bold"><NumberFormat value={ money } displayType={ 'text' } thousandSeparator={ true } prefix={ 'COP $' } /></Titulo>
        </div>
    )
}

export default Wallet
