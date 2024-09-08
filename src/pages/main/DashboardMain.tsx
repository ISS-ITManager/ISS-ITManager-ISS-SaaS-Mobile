import React from 'react';
import MasterComponent from '../../components/layouts/MasterComponent';
import TitleComponent from '../../components/layouts/TitleComponent';
import { IonContent } from '@ionic/react';
import useGoToPage from '../../functions/useGoToPage';
import { useModule } from '../../utilities/ModuleProvider';

const DashboardMain = () => {
    const goToPage = useGoToPage();
    const { updateModule } = useModule();

    const handleSelect = (page, module) => {
        goToPage(page);
        updateModule(module);
    };

    return (
        <MasterComponent page="main">
            <TitleComponent title={"Main Menu"} />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {/* IT Service Management */}
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card border border-light mt-3 animate__animated animate__bounceInLeft">
                            <div className="card-body d-flex align-items-center gap-4 cursor-pointer" onClick={() => handleSelect('/itsm/dashboard', 'itsm')}>
                                <div className="avatar avatar-lg d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                                        <i className="bx bx-briefcase text-white icon-size-32"></i>
                                    </div>
                                </div>
                                <div className="content-right flex-grow-1">
                                    <p className="mb-0 fw-semibold text-dark fs-5">IT Service Management</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Facilities Management */}
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card border border-light mt-3 animate__animated animate__bounceInRight">
                            <div className="card-body d-flex align-items-center gap-4 cursor-pointer" onClick={() => handleSelect('/fm/admin-dashboard', 'fm')}>
                                <div className="avatar avatar-lg d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                                        <i className="bx bx-buildings text-white icon-size-32"></i>
                                    </div>
                                </div>
                                <div className="content-right flex-grow-1">
                                    <p className="mb-0 fw-semibold text-dark fs-5">Facilities Management</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Human Resources Service Management */}
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card border border-light mt-3 animate__animated animate__bounceInLeft">
                            <div className="card-body d-flex align-items-center gap-4 cursor-pointer" onClick={() => handleSelect('/hrsm/attendance', 'hrsm')}>
                                <div className="avatar avatar-lg d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                                    <div className="avatar-initial bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                                        <i className="bx bx-group text-white icon-size-32"></i>
                                    </div>
                                </div>
                                <div className="content-right flex-grow-1">
                                    <p className="mb-0 fw-semibold text-dark fs-5">Human Resources Service Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional  Section */}
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="bg-light p-5 text-center rounded shadow-lg">
                            <h4 className="fw-bold text-dark">Dashboard Overview</h4>
                            <p className="text-muted">Access your management tools and analytics at a glance. Use the menu above to navigate between different services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MasterComponent>
    );
};

export default DashboardMain;
