import React, { useState } from 'react'
import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent'

import Chart from 'react-apexcharts';
import { IonContent, IonModal, IonHeader, IonToolbar } from '@ionic/react';

const DashboardIndex = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
    const options = {
        chart: {
          id: 'monthly-workorders-chart',
          toolbar: {
            show: true,
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          title: {
            text: 'Months',
          },
        },
        yaxis: {
          title: {
            text: 'Number of Work Orders',
          },
        },
        title: {
          text: 'Monthly Work Orders',
          align: 'left',
        },
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 5,
        },
        grid: {
          borderColor: '#e7e7e7',
        },
      };
    
      const series = [
        {
          name: 'Work Orders',
          data: [30, 40, 35, 50, 49, 60, 50, 45], // Replace with your actual data
        },
      ];


    return (
        <MasterComponent>
            <TitleComponent title={"Dashboard"} />
            <div className="row mb-3 animate__animated animate__bounceInLeft">
                <div className="col-12 mb-3">
                    <div className="card h-100 border border-light">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                                <div className="avatar avatar-lg">
                                    <div className="avatar-initial bg-label-primary rounded">
                                        <h1 className="bx  bx-briefcase mt-3 text-primary" ></h1>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <p className="mb-0 fw-medium">Total Workorders</p>
                                    <span className="text-primary mb-0 fw-bold">75</span>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="bx bx-time-five text-warning me-3"></i>
                                            New
                                        <span className='float-end fw-bold text-warning'>15</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bx bx-check text-info me-3"></i>
                                        Completed
                                        <span className='float-end fw-bold text-info'>35</span>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bx bx-package text-success me-3"></i>
                                        Closed
                                        <span className='float-end fw-bold text-success'>25</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button  className='btn btn-primary rounded-pill ' onClick={openModal}>
                                    <i className='fa fa-plus me-2'></i> Request Work Orders
                                </button>
                                    
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="card">
                <div className="card-body">
                <Chart options={options} series={series} type="line" height={350} />
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
                                    <i className='fa fa-plus'></i> Request Work Orders
                                </h5>
                            </div>
                            <div className="col-12">
                                <div className="card border border-light">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <b className="text-info">Locality Details</b>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="">Location Group</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option>Select Location Group </option>
                                                <option value="#">Qatar - Schools</option>
                                                <option value="#">United Kingdom - Nunnery</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="">Property</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option>Select Property </option>
                                                <option value="#">Al Maha Boys</option>
                                                <option value="#">Al Maha Girls</option>
                                                <option value="#">Al Jazeera</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="">Floor</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option>Select Floor </option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="">Zone</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option>Select Zone </option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label htmlFor="">Space</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option>Select Space </option>
                                                </select>
                                            </div>
                                        </div>
                                            
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <b className="text-info">Work Details</b>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="">Work Type</label>
                                                <select name="#" id="" className="form-control select2">
                                                <option value="#">Planned</option>
                                                <option value="#">General</option>
                                                <option value="#">Corrective</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="">Estimated Cost</label>
                                                <input type="number" className="form-control" name="" id=""  />
                                            </div>
                                           
                                            <div className="col-md-8">
                                                <label htmlFor=""> Work Instruction</label>
                                                <input type="number" className="form-control" placeholder="This is sample work instruction" name="" id="" />
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



export default DashboardIndex
