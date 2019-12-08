import React from 'react';

const ConfrimModal = ({ closeModal }) => {
    return(
        <div className="popup">
            <div className="popup__box">
                <p className="popup__text">Concert</p>
                <p className="popup__text">
                    <strong>Price</strong>: $10.00
                </p>
                
                <div className="popup__group">
                    <button className="popup__btn">Confrim</button>
                    <button className="popup__btn" onClick={closeModal} >Cancel</button>
                </div>
            </div> 
        </div>
    );
};
    
export default ConfrimModal;