import React, {useState, useEffect} from 'react'
import { IonFooter, IonToolbar } from '@ionic/react';

import { useHistory, useLocation  } from 'react-router-dom';

const FooterComponent = () => {

    const history = useHistory();
    const location = useLocation();

    const isWalletPage = location.pathname === '/wallet';
    const isWorkorderPage = location.pathname === '/workorders';
    const isApprovalPage = location.pathname === '/approval';
    const isDashboardPage = location.pathname === '/dashboard';
    const isProfilePage = location.pathname === '/profile';
    const navigateTo = (path) => {
      history.push(path);
    };
    return (
        <>
            <IonFooter className='text-center'>
                <div className=" bg-light">
                    <div className="row pt-3">
                        
                        <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/dashboard')}>
                            <i  className={`footer-icon bx bxs-dashboard ${isDashboardPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span  className={`badge badge-dot ${isDashboardPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
                        </div>
                        <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/workorders')}>
                            <i  className={`footer-icon bx bx-briefcase ${isWorkorderPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span  className={`badge badge-dot ${isWorkorderPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
                        </div>
                        <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/approval')}>
                            <i  className={`footer-icon bx bx-list-check ${isApprovalPage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span  className={`badge badge-dot ${isApprovalPage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
                        </div>
                        <div className="mb-3 col-3 text-center" onClick={() => navigateTo('/profile')}>
                            <i  className={`footer-icon bx bx-user ${isProfilePage  ? 'animate__animated animate__rubberBand' : ''}`}></i> <br />
                            <span  className={`badge badge-dot ${isProfilePage  ? 'bg-primary animate__animated animate__wobble' : ''}`} ></span>
                        </div>
                    </div>
                </div>
            </IonFooter>
        </>
    )
}

export default FooterComponent
