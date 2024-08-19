import React, { useState } from 'react'
import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent'
import { IonContent, IonModal, IonText, IonHeader, IonToolbar } from '@ionic/react';

const WorkordersIndex = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    return (
        <MasterComponent>
            <TitleComponent title={"Work Orders"} />
            <div className="card border border-light mb-3 animate__animated animate__bounceInLeft">
                <div className="card-body">
                    <b className='text-dark'>Current Work Order</b>
                    <span className='badge bg-label-warning rounded-pill float-end'> NEW</span> <br /> <br />
                    <span className='fw-bold text-info h5 mt-2'>
                        <i className='fa fa-ticket me-2'></i> W.O 10002
                    </span> <br />
                    <span className=''><i className='bx bxs-buildings'></i> Al Jazeera Academy</span> <br /><br />
                    <span>
                        This is sample instruction for work orders for demo purposes only
                    </span>
                    <div className='text-center'>
                        <button  className='btn btn-primary rounded-pill mt-3' onClick={openModal}>
                            <i className='bx bx-pencil me-2'></i> Update 
                        </button>
                    </div>
                </div>
            </div>
            <div className="card border border-light mb-3 animate__animated animate__bounceInRight">
                <div className="card-header">
                    <b className='text-dark'>Work Orders History</b>
                    <span className='fw-bold text-primary float-end'>
                    <i className='bx bx-right-arrow-alt'></i>
                    </span>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-timeline">
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 01:00 am</small>
                            </span>
                            <span className='float-end badge rounded-pill bg-label-success mt-n2'>
                                CLOSED
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 12:00 pm</small>
                            </span>
                            <span className='float-end badge rounded-pill bg-label-info mt-n2'>
                                COMPLETED
                            </span>
                        </li>
                        <li className="list-group-item list-group-timeline-info">
                            <span>
                                <span className='fw-bold text-primary'>W.O No. : 10001</span>
                                <br /> Al Jazeera Academy
                                <br/><small>July 20, 2024 - 10:00 am</small>
                            </span>
                            <span className='float-end badge rounded-pill bg-label-warning mt-n2'>
                                NEW
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <IonModal isOpen={showModal} onDidDismiss={closeModal}>
            <IonHeader >
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
                                    <i className='bx bx-pencil'></i> Update Work Orders
                                </h5>
                            </div>
                            <div className="col-12">
                                <div className="card border border-light">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <b className="text-info">Work Details</b>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="">Main Contact</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option value="#">Glenn Nerrie Afurong</option>
                                                <option value="#">Christian Atienza</option>
                                                <option value="#">Errylson Delgado</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="">Service Provider</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option value="#">Company A</option>
                                                <option value="#">Company B</option>
                                                <option value="#">Company C</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="">Work Type</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option value="#">Planned</option>
                                                <option value="#">General</option>
                                                <option value="#">Corrective</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="">Estimated Cost</label>
                                                <input type="number" className="form-control" name="" id=""  />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="">Actual Cost</label>
                                                <input type="number" className="form-control" name="" id=""  />
                                            </div>
                                            <div className="col-md-8">
                                                <label htmlFor=""> Work Instruction</label>
                                                <input type="number" className="form-control" placeholder="This is sample work instruction" name="" id="" />
                                            </div>
                                            <div className="col-12">
                                                <span>Upload Attachments</span>
                                                <input type="file" name="" className='form-control' id="" />
                                            </div>
                                            <div className="col-12 text-center mt-3">
                                                <button className='btn btn-primary rounded-pill'>
                                                    <i className='bx bx-save me-2'></i> Save
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

export default WorkordersIndex
