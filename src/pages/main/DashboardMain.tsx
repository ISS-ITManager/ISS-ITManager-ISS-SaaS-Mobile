import React, { useState, useEffect } from 'react';
import MasterComponent from '../../components/layouts/MasterComponent';
import TitleComponent from '../../components/layouts/TitleComponent';
import Chart from 'react-apexcharts';
import { IonContent, IonModal, IonHeader, IonToolbar } from '@ionic/react';
import useGoToPage from '../../functions/useGoToPage';

const DashboardMain = () => {

    const goToPage = useGoToPage();


    return (
        <MasterComponent page="main">
            <TitleComponent title={"Main Menu"} />
            <div className="row mb-3 ">
                <div className="col-12 mb-3">
                    <div className="card border border-light animate__animated animate__bounceInLeft">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                                <div className="avatar avatar-lg">
                                    <div className="avatar-initial bg-label-primary rounded">
                                        <h1 className="bx bx-briefcase mt-3 text-primary" ></h1>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <p className="mb-0 fw-medium"> IT Service Management</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card border border-light mt-3 animate__animated animate__bounceInRight">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                                <div className="avatar avatar-lg">
                                    <div className="avatar-initial bg-label-primary rounded">
                                        <h1 className="bx bx-buildings mt-3 text-primary" ></h1>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <p className="mb-0 fw-medium"  onClick={() => goToPage('/fm/admin-dashboard')}> Facilities Management </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card border border-light mt-3 animate__animated animate__bounceInLeft">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                                <div className="avatar avatar-lg">
                                    <div className="avatar-initial bg-label-primary rounded">
                                        <h1 className="bx bx-group mt-3 text-primary" ></h1>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <p className="mb-0 fw-medium"> Human Resources Service Management</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </MasterComponent>
    );
};

export default DashboardMain;
