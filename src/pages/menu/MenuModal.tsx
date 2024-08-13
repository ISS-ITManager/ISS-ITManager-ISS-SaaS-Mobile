// MenuModal.tsx
import React from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader className='header p-3'>
                <button className='btn btn-primary rounded-pill float-end'  onClick={onClose}> Close </button>
            </IonHeader>
            <IonContent className='ion-padding' >
                <div className="card mb-3 border border-light">
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col-5">
                            <img src="https://onedishkitchen.com/wp-content/uploads/2020/04/pasta-carbonara-one-dish-kitchen-fi-enhanced.png" className='rounded' alt="" />
                            </div>
                            <div className="col-7">
                                <b className='h4 text-dark'>Carbonara</b><br />
                                <span>Best Seller</span> <br />
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <p className='text-primary h1 mt-3'> QR 13.00 </p>
                            </div>
                            <div className="col-12 mt-3">
                                <b className='text-dark'>Allergens</b> <br />
                                <span className='badge bg-label-primary me-2'>Eggs</span>
                                <span className='badge bg-label-primary me-2'>Dairy</span>
                                <span className='badge bg-label-primary me-2'>Gluten</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border border-light">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <b className='text-primary'>Order Form</b>
                            </div>
                            <div className="col-12 mb-2">
                                <span>Quantity</span>
                                <div className='btn-group'>
                                    <button className='btn btn-label-primary'>
                                        <i className='fa fa-minus'></i>
                                    </button>
                                    <input type="text" disabled className='form-control bg-light rounded-0 text-center' value={1} />
                                    <button className='btn btn-label-primary'>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 mb-2">
                                <span>Remarks</span>
                                <textarea name="" id="" className='form-control rounded-pill'></textarea>
                            </div>
                            <div className="col-12 mb-2 text-center">
                                <button className='btn btn-primary rounded-pill'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default MenuModal;
