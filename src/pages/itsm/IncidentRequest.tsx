
import { IonHeader, IonToolbar, IonContent, IonModal } from '@ionic/react';
import React, { useState } from 'react';
import MasterComponent from '../../components/layouts/MasterComponent';
import TitleComponent from '../../components/layouts/TitleComponent';
import useGoToPage from '../../functions/useGoToPage';

const IncidentRequest = () => {
  const randomInc = "IR" + Math.floor(Math.random() * 100);
  const [showModal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [showTrack, setShowTrack] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  const goToPage = useGoToPage();

  return (
    <MasterComponent page="itsm">
      <TitleComponent title={"ITMS"} subtitle="Incident & Request" />

      <div className="row mb-3 ">
        <div className="col-12 mb-3">
          <div className="card border border-light animate__animated animate__bounceInLeft"
            onClick={() => {
              setShowOptions(true);
              setCurrentAction("Incident")
            }
            }
          >
            <div className="card-body">
              <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-primary rounded">
                    <i className="bx bx-alarm-exclamation text-primary icon-size-24 " ></i>
                  </div>
                </div>
                <div className="content-right"  >
                  <p className="mb-0 fw-medium" > Incident </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border border-light mt-3 animate__animated animate__bounceInRight"
            onClick={() => {
              setShowOptions(true);
              setCurrentAction("Request")
            }}>
            <div className="card-body">
              <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-primary rounded">
                    <i className="bx bxs-user-voice text-primary icon-size-24 " ></i>
                  </div>
                </div>
                <div className="content-right">
                  <p className="mb-0 fw-medium" onClick={() => { setShowOptions(true); setCurrentAction("Request") }}> Request </p>
                </div>
              </div>

            </div>
          </div>

          <div className="card border border-light mt-3 animate__animated animate__bounceInLeft"
            onClick={() => {
              goToPage('/itsm/incident&request')
            }}>
            <div className="card-body">
              <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-primary rounded">
                    <i className="bx bx-history text-primary icon-size-24 " ></i>
                  </div>
                </div>
                <div className="content-right">
                  <p className="mb-0 fw-medium"> History </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Display Options */}
      <IonModal isOpen={showOptions} onDidDismiss={() => setShowOptions(false)}>
        <IonHeader>
          <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>
            <div className="col-4 mb-3" slot="end">
              <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowOptions(false)}>
                <i className='fa fa-times'></i>
              </button>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>
          <div className="col-12">
            <div className="card border border-light animate__animated animate__bounceInLeft mb-3" onClick={() => setShowModal(true)}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                  <div className="avatar avatar-lg">
                    <div className="avatar-initial bg-label-primary rounded">
                      <i className="bx bx-add-to-queue text-primary icon-size-24"  ></i>
                    </div>
                  </div>
                  <div className="content-right">
                    <p className="mb-0 fw-medium" > Create {currentAction}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border border-light animate__animated animate__bounceInRight mb-3" onClick={() => setShowAssign(true)}>
              <div className="card-body">
                <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                  <div className="avatar avatar-lg">
                    <div className="avatar-initial bg-label-primary rounded">
                      <i className="bx bxs-right-arrow-circle text-primary icon-size-24"  ></i>
                    </div>
                  </div>
                  <div className="content-right">
                    <p className="mb-0 fw-medium"> Assign {currentAction}</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card border border-light animate__animated animate__bounceInLeft mb-3" onClick={() => setShowTrack(true)}>
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

          </div>


        </IonContent>
      </IonModal>

      {/* Creation of Incident / Request */}
      <IonModal isOpen={showModal} >
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
                  <i className='fa fa-plus'></i> {currentAction} Incident
                </h5>
              </div>
              <div className="col-12">
                <div className="card border border-light">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <b className="text-info">{currentAction} Details</b>
                      </div>
                      <div className="col-12">
                        <label htmlFor="">{currentAction} Number </label>
                        <input type="text" className="form-control" name="" id="" value={currentAction === "Request" ? "REQ12323" : "IN12323"} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="">Subject</label>
                        <input type="text" className="form-control" name="" id="" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control" name="" id="" />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Category</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select Category </option>
                          <option value="#">Hardware</option>
                          <option value="#">Software</option>
                          <option value="#">Network</option>
                          <option value="#">Security</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Severity</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select Severity </option>
                          <option value="#">Minor</option>
                          <option value="#">Major</option>
                          <option value="#">Catastrophic</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Reported By</label>
                        <input type="text" className="form-control" name="" id="" value="Username" />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Affected Systems / Applications</label>
                        <input type="text" className="form-control" name="" id="" />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">{currentAction} Type</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select Type </option>
                          <option value="#">Bug</option>
                          <option value="#">Outage</option>
                          <option value="#">Security Breach</option>
                        </select>
                      </div>
                      <div className="col-12 text-center mt-3">
                        <button className='btn btn-primary rounded-pill' >
                          <i className='bx bx-save me-2'></i> Create
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

      {/* Display Assign Incident/Request */}
      <IonModal isOpen={showAssign}>
        <IonHeader>
          <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>

            <div className="col-4 mb-3" slot="end">
              <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={() => setShowAssign(false)}>
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
                  <i className='fa fa-arrow-right'></i>Assign {currentAction}
                </h5>
              </div>
              <div className="col-12">
                <div className="card border border-light">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">{currentAction}</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select {currentAction} </option>
                          <option value="#">{currentAction}1 </option>
                          <option value="#">{currentAction}2</option>
                          <option value="#">{currentAction}3</option>
                          <option value="#">{currentAction}4</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Assigned To</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select one </option>
                          <option value="#">Person1</option>
                          <option value="#">Person2</option>
                          <option value="#">Person2</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Assignment Date</label>
                        <input type="date" className="form-control" name="" id="" value={Date()} />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Incident Type</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select Priority </option>
                          <option value="#">Low Priority</option>
                          <option value="#">Medium Priority</option>
                          <option value="#">High Priority</option>
                          <option value="#">Critical</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Notes</label>
                        <input type="text" className="form-control" name="" id="" />
                      </div>
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
        </IonContent>
      </IonModal>


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
                      <div className="col-md-4 mb-2">
                        <label htmlFor="">Status</label>
                        <select name="#" id="" className="form-control select2">
                          <option>Select Status </option>
                          <option value="#">All</option>
                          <option value="#">Open</option>
                          <option value="#">In Progress</option>
                          <option value="#">On Hold</option>
                          <option value="#">Resolved</option>
                          <option value="#">Closed</option>
                        </select>
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
                  <div className="card border border-light mt-3">
                    <TitleComponent title={`${currentAction} Results`} />
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">{currentAction} Name</label>
                          <input className='form-control' value={`${currentAction} name`}></input>
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Status</label>
                          <input className='form-control' value="Resolved"></input>
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Description</label>
                          <textarea className='form-control' value="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea >
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Resolution Date/Time</label>
                          <input className='form-control' value="1/1/2024 10:00am"></input>
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Closure Date/Time</label>
                          <input className='form-control' value="1/2/2024 10:00am"></input>
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Time Spent</label>
                          <input className='form-control' value="1440 mins"></input>
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Root Cause Analysis</label>
                          <textarea className='form-control' value="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea >
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Resolution Details</label>
                          <textarea className='form-control' value="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea >
                        </div>
                        <div className="col-md-4 mb-2">
                          <label htmlFor="">Impact Assessment</label>
                          <textarea className='form-control' value="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea >
                        </div>

                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </IonContent>
      </IonModal>

    </MasterComponent>
  )
}

export default IncidentRequest;