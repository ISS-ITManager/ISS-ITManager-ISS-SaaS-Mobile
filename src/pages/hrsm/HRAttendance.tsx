import { IonContent } from '@ionic/react';
import React, { useState, useEffect } from 'react'
import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent';

const HRAttendance = () => {
  const [showResults, setShowResults] = useState(false);
  useEffect(()=> {
    setShowResults(false);
  },[])
  return (
    <MasterComponent page="hrsm">
      <TitleComponent title="HRSM" subtitle="HR Attendance" />
      <IonContent className='ion-padding'>
        <div className="card border border-light mb-3 animate__animated animate__bounceInRight">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4 mb-2">
                <label htmlFor="">Select Date</label>
                <input className='form-control' type="date"></input>
              </div>
            </div>

            <div className="col-12 text-center mt-3">
              <button className='btn btn-primary rounded-pill' onClick={() => setShowResults(true)}>
                <i className='bx bx-search me-2'></i> Search
              </button>

              <button className='btn btn-secondary rounded-pill' onClick={() => setShowResults(false)}>
                <i></i> Cancel
              </button>
            </div>
          </div>
        </div>

        {showResults && <div className="card-body">
          <ul className="list-group" >
            <li className="list-group-item list-group-timeline-info">
              <span>
                <span className='btn btn-label-primary float-end rounded-pill mt-5' >
                  <i></i>8 hours
                </span>
                <ul className="list-group list-group-timeline">
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time In - 7:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time Out - 16:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                </ul>
              </span>
            </li>

            <li className="list-group-item list-group-timeline-info">
              <span>
                <span className='btn btn-label-secondary float-end rounded-pill mt-5' >
                  <i></i>7 hours
                </span>
                <ul className="list-group list-group-timeline">
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time In - 8:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time Out - 16:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                </ul>
              </span>
            </li>

            <li className="list-group-item list-group-timeline-info">
              <span>
                <span className='btn btn-label-primary float-end rounded-pill mt-5' >
                  <i></i>8 hours
                </span>
               <ul className="list-group list-group-timeline">
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time In - 7:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                  <li className="list-group-item list-group-timeline-info">
                    <span className='fw-bold text-primary'>Time Out - 16:30:01 </span>
                    <br /><small>Sept 2, 2024</small>
                  </li>
                </ul>
              </span>
            </li>
          </ul>

        </div>
        }
      </IonContent>
    </MasterComponent>
  )
}

export default HRAttendance;