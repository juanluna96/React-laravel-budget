import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearNuevaTransferenciaAction } from '../../actions/WalletActions';

const FormTransfer = () => {
    const [Transfer, setTransfer] = useState({
        description: '',
        amount: '',
        wallet_id: 1
    })

    const dispatch = useDispatch();

    const onChangeFormulario = (e) => {
        setTransfer({
            ...Transfer,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitFormulario = (e) => {
        e.preventDefault();

        dispatch(crearNuevaTransferenciaAction(Transfer));
    }

    return (
        <div className="col-md-12">
            <form className="mx-auto form-inline justify-content-center col-md-10" onSubmit={ (e) => onSubmitFormulario(e) }>
                <div className="mb-2 col-12 col-md-5 form-group">
                    <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Description"
                        name="description"
                        onChange={ (e) => onChangeFormulario(e) }
                        value={ Transfer.description }
                    />
                </div>
                <div className="mb-2 col-12 col-md-5 input-group ms-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="amount"
                        onChange={ (e) => onChangeFormulario(e) }
                        value={ Transfer.amount }
                    />
                </div>
                <button
                    type="submit"
                    className="mb-2 btn btn-primary"
                >
                    Add
                    </button>
            </form>
        </div>
    )
}

export default FormTransfer
