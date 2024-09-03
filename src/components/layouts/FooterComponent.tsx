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

//                         <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/dashboard')}>
//                             <i  className={`footer-icon bx bxs-dashboard ${isDashboardPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isDashboardPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/workorders')}>
//                             <i  className={`footer-icon bx bx-briefcase ${isWorkorderPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isWorkorderPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/approval')}>
//                             <i  className={`footer-icon bx bx-list-check ${isApprovalPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                             <span  className={`badge badge-dot ${isApprovalPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
//                         </div>
//                         <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/profile')}>
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
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/admin-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/admin-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/admin-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     {userRole === 'Supervisor' && (
//                         <>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/supervisor-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/supervisor-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/supervisor-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     {userRole === 'Technician' && (
//                         <>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/technician-dashboard')}>
//                                 <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/technician-workorders')}>
//                                 <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                             <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/technician-approval')}>
//                                 <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                                 <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                             </div>
//                         </>
//                     )}

//                     <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/profile')}>
//                         <i className={`footer-icon bx bx-user ${isProfilePage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
//                         <span className={`badge badge-dot ${isProfilePage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
//                     </div>
//                 </div>
//             </div>
//         </IonFooter>
//     );
// }

// export default FooterComponent;

import React from 'react';
import { IonFooter } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';

const FooterComponent = ({ module }) => {
    const history = useHistory();
    const location = useLocation();
    const userRole = localStorage.getItem('userRole'); // Assuming userRole is stored in localStorage

    // Determine active path based on user role
    const isDashboardPage = location.pathname === (userRole === 'Asignee' ? '/asignee-dashboard' : userRole === 'Requestor' ? '/requestor-dashboard' : '/admin-dashboard');
    const isWorkorderPage = location.pathname === (userRole === 'Requestor' || userRole === 'Admin' ? '/admin-workorders' : '/asignee-workorders');
    const isApprovalPage = location.pathname === (userRole === 'Requestor' || userRole === 'Admin' ? '/admin-approval' : '/asignee-approval');
    const isProfilePage = location.pathname === '/profile';

    // Navigate to the specified path
    const navigateTo = (path) => {
        history.push(path);
    };

    return (
        <IonFooter className='text-center'>
            <div className="bg-light">
                {module === "fm" &&
                    <div className={`row pt-3 ${userRole === 'Asignee' ? 'justify-content-center' : ''}`}>
                        {userRole === 'Admin' && (
                            <>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/admin-dashboard')}>
                                    <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/admin-workorders')}>
                                    <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/admin-approval')}>
                                    <i className={`footer-icon bx bx-list-check ${isApprovalPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isApprovalPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                            </>
                        )}

                        {userRole === 'Requestor' && (
                            <>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/requestor-dashboard')}>
                                    <i className={`footer-icon bx bxs-dashboard ${isDashboardPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isDashboardPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/requestor-workorders')}>
                                    <i className={`footer-icon bx bx-briefcase ${isWorkorderPage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                                    <span className={`badge badge-dot ${isWorkorderPage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                                </div>
                                <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/fm/requestor-approval')}>
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
                        )}

                        <div className={`mb-3 ${userRole === 'Asignee' ? 'col-4' : 'col-3'} text-center`} onClick={() => navigateTo('/profile')}>
                            <i className={`footer-icon bx bx-user ${isProfilePage ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span className={`badge badge-dot ${isProfilePage ? 'bg-primary animate__animated animate__wobble' : ''}`}></span>
                        </div>
                    </div>
                }
            </div>
        </IonFooter>
    );
}

export default FooterComponent;
