import React, { useState } from 'react'

const Cards = ({ Lists }) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <h2>List of Pokemon Cards</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {[...Array[20]].Lists.map((curElem) => {
                        return (
                            <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image">
                                            <img src={curElem.sprites.front_default} className="rounded" width="155" alt="ima" onClick={setModal(true)} />
                                            {
                                                modal ? (
                                                    <div className="modal" tabindex="-1">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">{curElem.name}</h5>
                                                                    <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <img src={curElem.sprites.front_default} className="rounded" width="155" alt="ima" />
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (<></>)
                                            }
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h2 className="mb-0 mt-0 textleft">{curElem.id}</h2>
                                            <h4 className="mb-0 mt-0 textleft">{curElem.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards