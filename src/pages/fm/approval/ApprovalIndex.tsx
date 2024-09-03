import React, { useState } from 'react'
import MasterComponent from '../../../components/layouts/MasterComponent'
import TitleComponent from '../../../components/layouts/TitleComponent'
import { IonContent, IonModal, IonText, IonHeader, IonToolbar } from '@ionic/react';

const ApprovalIndex = () => {
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const openModal = () => {
      setShowModal(true);
    };
    const handleDisapproveClick = () => {
        setIsVisible(!isVisible);
    };
    const closeModal = () => {
      setShowModal(false);
    };
    return (
        <MasterComponent page="fm">
            <TitleComponent title={"For Approval"} />
          
            <div className="card border border-light mb-3 animate__animated animate__bounceInRight">
                <div className="card-header">
                    <b className='text-dark'>For Approval Work Orders</b>
                    <span className='fw-bold text-primary float-end'>
                    <i className='bx bx-right-arrow-alt'></i>
                    </span>
                </div>
                <div className="card-body">
                    <ul className="list-group ">
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 01:00 am</small>
                            </span>
                            <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={openModal}>
                                <i className='bx bx-pencil'></i>
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 01:00 am</small>
                            </span>
                            <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={openModal}>
                                <i className='bx bx-pencil'></i>
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 01:00 am</small>
                            </span>
                            <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={openModal}>
                                <i className='bx bx-pencil'></i>
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 01:00 am</small>
                            </span>
                            <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={openModal}>
                                <i className='bx bx-pencil'></i>
                            </span>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <IonModal isOpen={showModal} onDidDismiss={closeModal}>
            <IonHeader>
                <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>
                    <div className="col-4 mb-3" slot="end">
                        <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={closeModal}>
                            <i className='fa fa-times'></i> 
                        </button>
                    </div>
                </IonToolbar>
            </IonHeader>
                <IonContent>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-8 ">
                                <h5 className='text-primary fw-bold'>
                                    <i className='bx bx-pencil'></i>For Approval
                                </h5>
                            </div>
                            {/* <div className="col-4 mb-3">
                                <button className='btn mt-2 btn-primary float-end rounded-pill'  onClick={closeModal}>
                                    <i className='fa fa-times'></i> 
                                </button>
                            </div> */}
                            <div className="col-12">
                                <div className="card border border-light">
                                    <div className="card-body text-center">
                                        <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                        <br /> Al Jazeera Academy
                                        <br/><span>July 20, 2024 - 01:00 am</span>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <div className="form-check custom-option custom-option-icon">
                                                    <label className="form-check-label custom-option-content">
                                                        <span className="custom-option-body">
                                                            <i className="bx bx-check-circle text-info"></i>
                                                            <span className="custom-option-title">Approve</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check custom-option custom-option-icon" onClick={handleDisapproveClick}>
                                                    <label className="form-check-label custom-option-content">
                                                        <span className="custom-option-body">
                                                            <i className="fa fa-times text-danger"></i>
                                                            <span className="custom-option-title">Disapprove</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div> 
                                            {isVisible && (
                                                <div className="col-12 text-start mt-3">
                                                    <b className=''>Reason to Disapprove</b>
                                                    <textarea name="" className='form-control' rows="5" id=""></textarea>
                                                </div>
                                            )}
                                            <div className="col-12">
                                                <button className='btn btn-primary rounded-pill mt-3'>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonModal>
        </MasterComponent>
    )
}

export default ApprovalIndex
