import React from 'react'

const FormTransfer = () => {
    return (
        <div className="col-md-12">
            <form className="mx-auto form-inline justify-content-center col-md-10">
                <div className="mb-2 col-12 col-md-5 form-group">
                    <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Description"
                        name="description"
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
