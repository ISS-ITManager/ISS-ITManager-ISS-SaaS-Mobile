import { IonContent, IonModal, IonHeader, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent';
import useGoToPage from '../../functions/useGoToPage';

const HRLeaveLetter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentAction, setCurrentAction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showTrack, setShowTrack] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showForApproval, setShowForApproval] = useState(false);
  const [showDisapproveRemarks, setShowDisapproveRemarks] = useState(false);
  const goToPage = useGoToPage();
  return (
    <MasterComponent page="hrsm">
      <TitleComponent title="HRSM" subtitle="Feedback, Leave, Letter" />
      <IonContent className='ion-padding'>

        <div className="row mb-3 ">
          <div className="col-12 mb-3">
            <div className="card border border-light mb-3 animate__animated animate__bounceInRight"
              onClick={() => goToPage("/hrsm/employee-feedback")}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                  <div className="avatar avatar-lg">
                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                      <i className="bx bx-edit text-white icon-size-24 " ></i>
                    </div>
                  </div>
                  <div className="content-right">
                    <p className="mb-0 fw-medium"> Employee Feedback </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="card border border-light animate__animated animate__bounceInLeft"
              onClick={() => {
                setShowOptions(true);
                setCurrentAction("Letter")
              }
              }
            >
              <div className="card-body">
                <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                  <div className="avatar avatar-lg">
                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                      <i className="bx bx-file text-white icon-size-24 " ></i>
                    </div>
                  </div>
                  <div className="content-right"  >
                    <p className="mb-0 fw-medium" > Letter </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="card border border-light mt-3 animate__animated animate__bounceInRight"
              onClick={() => {
                setShowOptions(true);
                setCurrentAction("Leave")
              }}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                  <div className="avatar avatar-lg">
                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                      <i className="bx bx-calendar-edit text-white icon-size-24 " ></i>
                    </div>
                  </div>
                  <div className="content-right">
                    <p className="mb-0 fw-medium"> Leave </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Display Options */}
          <IonModal isOpen={showOptions} onDidDismiss={() => setShowOptions(false)}>
            <IonContent className='ion-padding'>
              <IonHeader>
                <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>
                  <div className="col-4 mb-3" slot="end">
                    <button className='btn mt-2 btn-primary float-end rounded-pill'
                      onClick={() => setShowOptions(false)}>
                      <i className='fa fa-times'></i>
                    </button>
                  </div>
                </IonToolbar>
              </IonHeader>

              <div className="col-12">
                <div className="card border border-light animate__animated animate__bounceInLeft mb-3"
                  onClick={() => {
                    { currentAction === "Letter" ? setShowRequest(true) : setShowLeaveRequest(true) }
                  }}>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                      <div className="avatar avatar-lg">
                        <div className="avatar-initial bg-label-primary rounded">
                          <i className="bx bx-add-to-queue text-primary icon-size-24"  ></i>
                        </div>
                      </div>
                      <div className="content-right">
                        <p className="mb-0 fw-medium"> {currentAction} Request </p>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="card border border-light animate__animated animate__bounceInRight mb-3" onClick={() => setShowTrack(true)}>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                      <div className="avatar avatar-lg">
                        <div className="avatar-initial bg-label-primary rounded">
                          <i className="bx bx-current-location text-primary icon-size-24" ></i>
                        </div>
                      </div>
                      <div className="content-right">
                        <p className="mb-0 fw-medium"> Track {currentAction}</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="card border border-light animate__animated animate__bounceInLeft" onClick={() => setShowForApproval(true)}>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                      <div className="avatar avatar-lg">
                        <div className="avatar-initial bg-label-primary rounded">
                          <i className="bx bx-user-check text-primary icon-size-24" ></i>
                        </div>
                      </div>
                      <div className="content-right">
                        <p className="mb-0 fw-medium"> {currentAction} Approval</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </IonContent>
          </IonModal>

          {/* Request Letter */}
          <IonModal isOpen={showRequest}>
            <IonHeader >
              <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>

                <div className="col-4 mb-3" slot="end">
                  <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowRequest(false)}>
                    <i className='fa fa-times'></i>
                  </button>
                </div>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-8 ">
                    <h5 className='text-primary fw-bold'>
                      <i className='fa fa-arrow-right'></i> Request {currentAction}
                    </h5>
                  </div>
                  <div className="col-12">
                    <div className="card border border-light">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Date</label>
                            <input className='form-control' type="date"></input>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Purpose</label>
                            <select name="#" id="" className="form-control select2">
                              <option>Select Purpose </option>
                              <option value="#">Visa Application</option>
                              <option value="#">Loan Application</option>
                              <option value="#">Job Application</option>
                            </select>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Letter Type</label>
                            <select name="#" id="" className="form-control select2">
                              <option>Select Type </option>
                              <option value="#">Employment Verification</option>
                              <option value="#">Salary Certificate</option>
                              <option value="#">Experience Letter</option>
                              <option value="#">Reference Letter</option>
                            </select>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Remarks</label>
                            <input type="text" className="form-control" name="" id="" />
                          </div>
                        </div>
                        <div className="col-12 text-center mt-3">
                          <button className='btn btn-primary rounded-pill' >
                            <i className='bx bx-save me-2'></i> Submit
                          </button>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </IonContent>
          </IonModal>

          {/* Leave Request */}
          <IonModal isOpen={showLeaveRequest}>
            <IonHeader >
              <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>

                <div className="col-4 mb-3" slot="end">
                  <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowLeaveRequest(false)}>
                    <i className='fa fa-times'></i>
                  </button>
                </div>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-8 ">
                    <h5 className='text-primary fw-bold'>
                      <i className='fa fa-arrow-right'></i> Request {currentAction}
                    </h5>
                  </div>
                  <div className="col-12">
                    <div className="card border border-light">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Date From</label>
                            <input className='form-control' type="date"></input>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Date To</label>
                            <input className='form-control' type="date"></input>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Leave Type</label>
                            <select name="#" id="" className="form-control select2">
                              <option>Select Leave Type</option>
                              <option value="#">Annual Leave</option>
                              <option value="#">Sick Leave</option>
                              <option value="#">Short Leave</option>
                              <option value="#">Maternity Leave</option>
                              <option value="#">Paternity Leave</option>
                              <option value="#">Business Leave</option>
                            </select>
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Total Leave days</label>
                            <input type="number" className="form-control" name="" id="" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Reason for Leave</label>
                            <input type="text" className="form-control" name="" id="" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">Remarks</label>
                            <input type="text" className="form-control" name="" id="" />
                          </div>
                        </div>
                        <div className="col-12 text-center mt-3">
                          <button className='btn btn-primary rounded-pill' >
                            <i className='bx bx-save me-2'></i> Submit
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </IonContent>
          </IonModal>

          {/* Track Leave */}
          <IonModal isOpen={showTrack}>
            <IonHeader>
              <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>

                <div className="col-4 mb-3" slot="end">
                  <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => { setShowTrack(false); setShowResults(false) }}>
                    <i className='fa fa-times'></i>
                  </button>
                </div>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-8 ">
                    <h5 className='text-primary fw-bold'>
                      <i className='fa fa-location-crosshairs'></i> Track {currentAction}
                    </h5>
                  </div>
                  <div className="col-12">

                    <div className="card border border-light">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-md-4 mb-2">
                            <label htmlFor="">{currentAction}</label>
                            <input className='form-control' placeholder={`Search ${currentAction}`}></input>
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <button className='btn btn-primary rounded-pill' onClick={() => setShowResults(true)}>
                            <i className='bx bx-search me-2'></i> Search
                          </button>

                          <button className='btn btn-secondary rounded-pill' onClick={() => setShowResults(false)}>
                            <i></i> Cancel
                          </button>
                        </div>
                      </div>
                    </div>

                    {showResults &&
                      <div className='mt-3'>
                        <TitleComponent title={`${currentAction} Results`} />
                        <div className="card border border-light">
                          <div className="card-body">

                            <span className='fw-bold text-info h5 mt-2'>
                              <i className={`fa ${currentAction === "Leave" ? "fa-calendar" : "fa-doc"} me-2`}></i> {currentAction} Request
                            </span>
                            <span className="badge bg-warning rounded-pill float-end">Pending</span>
                            <br /> <br />
                            <span className=''>Approver: John Doe</span> <br /><br />
                            <span>
                              {currentAction} Type : Doc
                            </span>
                          </div>
                        </div>
                        <div className="card border border-light mt-2">
                          <div className="card-body">

                            <span className='fw-bold text-info h5 mt-2'>
                              <i className={`fa ${currentAction === "Leave" ? "fa-calendar" : "fa-doc"} me-2`}></i> {currentAction} Request
                            </span>
                            <span className="badge bg-success rounded-pill float-end">Completed</span>
                            <br /> <br />
                            <span className=''>Approver: James Brown</span> <br /><br />
                            <span>
                              {currentAction} Type : Doc
                            </span>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </IonContent>
          </IonModal>

          {/* Modal for List of Letter / Leave */}
          <IonModal isOpen={showForApproval}>
            <IonHeader>
              <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>

                <div className="col-4 mb-3" slot="end">
                  <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowForApproval(false)}>
                    <i className='fa fa-times'></i>
                  </button>
                </div>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              <div className="card border border-light mb-3 animate__animated animate__bounceInRight">
                <div className="card-header">
                  <b className='text-dark'>For Approval - {currentAction}</b>
                  <span className='fw-bold text-primary float-end'>
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                </div>
                <div className="card-body">
                  <ul className="list-group ">
                    <li className="list-group-item list-group-timeline-info">
                      <span>
                        <span className='fw-bold text-primary'>{currentAction} No. : 10001</span>
                        <br /> John Doe
                        <br /><small>Dec 20, 2024 - Jan 20, 2025</small>
                      </span>
                      <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={() => setShowModal(true)}>
                        <i className='bx bx-pencil'></i>
                      </span>
                    </li>
                    <li className="list-group-item list-group-timeline-info">
                      <span>
                        <span className='fw-bold text-primary'>{currentAction}. : 10002</span>
                        <br /> James Brown
                        <br /><small>Oct 1, 2024 - Oct 2, 2024</small>
                      </span>
                      <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={() => setShowModal(true)}>
                        <i className='bx bx-pencil'></i>
                      </span>
                    </li>
                    <li className="list-group-item list-group-timeline-info">
                      <span>
                        <span className='fw-bold text-primary'>{currentAction} No. : 10003</span>
                        <br /> Emily White
                        <br /><small>Sept 3, 2024 - Sept 5, 2024</small>
                      </span>
                      <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={() => setShowModal(true)}>
                        <i className='bx bx-pencil'></i>
                      </span>
                    </li>
                    <li className="list-group-item list-group-timeline-info">
                      <span>
                        <span className='fw-bold text-primary'>{currentAction} No. : 10004</span>
                        <br /> Aloe Vera
                        <br /><small>Nov 5, 2024 - Nov 7, 2024</small>
                      </span>
                      <span className='btn btn-label-primary float-end mt-n4 rounded-pill' onClick={() => setShowModal(true)}>
                        <i className='bx bx-pencil'></i>
                      </span>
                    </li>
                  </ul>

                </div>
              </div>
            </IonContent>
          </IonModal>

          {/* Modal for Approval */}
          <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
            <IonHeader>
              <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>
                <div className="col-4 mb-3" slot="end">
                  <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowModal(false)}>
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
                      <i className='bx bx-pencil'></i>For Approval - ({currentAction})
                    </h5>
                  </div>
                  <div className="col-12">
                    <div className="card border border-light">
                      <div className="card-body text-center">
                        <span className='fw-bold text-primary'>{currentAction} No. : 10001</span>
                        <br /> John Doe
                        <br /><span>Dec 20, 2024 - Jan 20, 2025</span>
                        <div className="row mt-3">
                          <div className="col-6">
                            <div className="form-check custom-option custom-option-icon" onClick={() => setShowDisapproveRemarks(false)}>
                              <label className="form-check-label custom-option-content">
                                <span className="custom-option-body">
                                  <i className="bx bx-check-circle text-info"></i>
                                  <span className="custom-option-title">Approve</span>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-check custom-option custom-option-icon" onClick={() => setShowDisapproveRemarks(true)}>
                              <label className="form-check-label custom-option-content">
                                <span className="custom-option-body">
                                  <i className="fa fa-times text-danger"></i>
                                  <span className="custom-option-title">Disapprove</span>
                                </span>
                              </label>
                            </div>
                          </div>
                          {showDisapproveRemarks && (
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
        </div>
      </IonContent>
    </MasterComponent>
  )
}

export default HRLeaveLetter;