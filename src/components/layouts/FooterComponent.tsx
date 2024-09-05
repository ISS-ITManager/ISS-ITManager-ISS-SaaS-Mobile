// import React, {useState, useEffect} from 'react'
// import { IonFooter, IonToolbar } from '@ionic/react';

// import { useHistory, useLocation  } from 'react-router-dom';

// const FooterComponent = () => {

//     const history = useHistory();
//     const location = useLocation();

//     const isWalletPage = location.pathname === '/wallet';
//     const isWorkorderPage = location.pathname === '/workorders';
//     const isApprovalPage = location.pathname === '/approval';
//     const isDashboardPage = location.pathname === '/dashboard';
//     const isProfilePage = location.pathname === '/profile';
//     const navigateTo = (path) => {
//       history.push(path);
//     };
//     return (
//         <>
//             <IonFooter className='text-center'>
//                 <div className=" bg-light">
//                     <div className="row pt-3">

//                         <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/dashboard')}>
//                             <i  className={`footer-icon bx bxs-dashboard ${isDashboardPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isDashboardPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/workorders')}>
//                             <i  className={`footer-icon bx bx-briefcase ${isWorkorderPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isWorkorderPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/approval')}>
//                             <i  className={`footer-icon bx bx-list-check ${isApprovalPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isApprovalPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/profile')}>
//                             <i  className={`footer-icon bx bx-user ${isProfilePage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isProfilePage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                     </div>
//                 </div>
//             </IonFooter>
//         </>
//     )
// }

// export default FooterComponent

// import React from 'react';
// import { IonFooter } from '@ionic/react';
// import { useHistory, useLocation } from 'react-router-dom';

// const FooterComponent = () => {
//     const history = useHistory();
//     const location = useLocation();
//     const userRole = localStorage.getItem('userRole'); // Assuming userRole is stored in localStorage

//     // Determine active path based on user role
//     const isDashboardPage = location.pathname === (userRole === 'Technician' ? '/technician-dashboard' : userRole === 'Supervisor' ? '/supervisor-dashboard' : '/admin-dashboard');
//     const isWorkorderPage = location.pathname === (userRole === 'Supervisor' || userRole === 'Admin' ? '/admin-workorders' : '/technician-workorders');
//     const isApprovalPage = location.pathname === (userRole === 'Supervisor' || userRole === 'Admin' ? '/admin-approval' : '/technician-approval');
//     const isProfilePage = location.pathname === '/profile';

//     // Navigate to the specified path
//     const navigateTo = (path) => {
//         history.push(path);
//     };

//     return (
//         <IonFooter className='text-center'>
//             <div className="bg-light">
//                 <div className="row pt-3">
//                     {userRole === 'Admin' && (
//                         <>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/admin-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/admin-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/admin-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     {userRole === 'Supervisor' && (
//                         <>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/supervisor-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/supervisor-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/supervisor-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     {userRole === 'Technician' && (
//                         <>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/technician-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/technician-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/technician-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/profile')}>
//                         <i className={`footer-icon bx bx-user ${isProfilePage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                         <span className={`badge badge-dot ${isProfilePage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                     </div>
//                 </div>
//             </div>
//         </IonFooter>
//     );
// }

// export default FooterComponent;

import React, { useEffect } from 'react';
import { IonFooter } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';

const FooterComponent = ({ module }) => {
    const history = useHistory();
    const location = useLocation();
    const userRole = localStorage.getItem('userRole'); // Assuming userRole is stored in localStorage
    let currentPage = location.pathname;

    // Determine active path based on user role
    // const isDashboardPage = location.pathname === '/admin-dashboard'; //(userRole === 'Asignee' ? '/asignee-dashboard' : userRole === 'Requestor' ? '/requestor-dashboard' : '/admin-dashboard');
    // const isWorkorderPage = location.pathname === '/admin-workorders';//(userRole === 'Requestor' || userRole === 'Admin' ? '/admin-workorders' : '/asignee-workorders');
    // const isApprovalPage = location.pathname === '/admin-approval'; //(userRole === 'Requestor' || userRole === 'Admin' ? '/admin-approval' : '/asignee-approval');
    // const isProfilePage = location.pathname === '/profile';


    // Navigate to the specified path
    const navigateTo = (path) => {
        history.push(path);
    };
    return (
        <IonFooter className='text-center'>
            <div className="bg-light">
                {module === "fm" &&
                    <div className={`row pt-3 ${userRole === 'Asignee' ? 'justify-content-center' : ''}`}>
                        <>
                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-dashboard')}>
                                <i className={`footer-icon bx bxs-dashboard ${(currentPage === '/fm/admin-dashboard' || currentPage === '/fm')  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${(currentPage === '/fm/admin-dashboard' || currentPage === '/fm') ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>
                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-workorders')}>
                                <i className={`footer-icon bx bx-briefcase ${currentPage === '/fm/admin-workorders' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/fm/admin-workorders' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>
                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-approval')}>
                                <i className={`footer-icon bx bx-list-check ${currentPage === '/fm/admin-approval' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/fm/admin-approval' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>
                        </>
                        {/*{userRole === 'Admin' && (
                            <>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-dashboard')}>
                                    <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-workorders')}>
                                    <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/admin-approval')}>
                                    <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                            </>
                        )}

                         {userRole === 'Requestor' && (
                            <>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/requestor-dashboard')}>
                                    <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/requestor-workorders')}>
                                    <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/requestor-approval')}>
                                    <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                            </>
                        )}

                        {userRole === 'Asignee' && (
                            <>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/asignee-dashboard')}>
                                    <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/fm/asignee-workorders')}>
                                    <i className={`footer-icon fas fa-list ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                            </>
                        )} */}

                        {/* <div className={`mb-3 ${userRole === 'Asignee' ? 'col-3' : 'col-3'} text-center`} onClick={() => navigateTo('/profile')}>
                            <i className={`footer-icon bx bx-user ${isProfilePage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span className={`badge badge-dot ${isProfilePage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                        </div> */}
                    </div>
                }

                {module === "itsm" &&
                    <>
                        <div className={`row pt-3`}>
                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/itsm/dashboard')}>
                                <i className={`footer-icon bx bxs-dashboard ${currentPage === '/itsm/dashboard' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/itsm/dashboard' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>

                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/itsm/incident-request')}>
                                <i className={`footer-icon bx bxs-notepad ${currentPage === '/itsm/incident-request' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/itsm/incident-request' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>

                            <div className="mb-3 col-4 text-center" onClick={() => navigateTo('/itsm/faqs')}>
                                <i className={`footer-icon bx bxs-book-reader ${currentPage === '/itsm/faqs' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/itsm/faqs' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>
                        </div>
                    </>
                }


                {module === "hrsm" &&
                    <>
                        <div className={`row pt-3`}>
                            {/* <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/hrsm/dashboard')}>
                                <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>*/}

                            <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/hrsm/attendance')}>
                                <i className={`footer-icon bx bxs-time ${currentPage === '/hrsm/attendance' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/hrsm/attendance' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>

                            <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/hrsm/letter-leave')}>
                                <i className={`footer-icon bx bxs-file ${(currentPage === '/hrsm/letter-leave' || currentPage === '/hrsm/employee-feedback') ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${(currentPage === '/hrsm/letter-leave' || currentPage === '/hrsm/employee-feedback') ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>

                            <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/hrsm/employee-tracking')}>
                                <i className={`footer-icon bx bxs-location-plus ${currentPage === '/hrsm/employee-tracking' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/hrsm/employee-tracking' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>

                            <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/hrsm/employee-performance')}>
                                <i className={`footer-icon bx bxs-objects-vertical-bottom ${currentPage === '/hrsmemployee-performance' ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                <span className={`badge badge-dot ${currentPage === '/hrsm/employee-performance' ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                            </div>
                        </div>
                    </>
                }
            </div>
        </IonFooter>
    );
}

export default FooterComponent;
