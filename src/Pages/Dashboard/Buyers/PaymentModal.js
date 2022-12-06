import React from 'react';

const PaymentModal = () =>
{
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </>
    );
};

export default PaymentModal;