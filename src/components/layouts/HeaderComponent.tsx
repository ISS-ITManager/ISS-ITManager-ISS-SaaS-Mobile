import React, { useState, useEffect }  from 'react'
import { IonHeader, IonToolbar} from '@ionic/react';
import useGoToPage from '../../functions/useGoToPage';

const HeaderComponent = () => {
    
    const goToPage = useGoToPage();
    
    return (
        <>
            <IonHeader>
                <IonToolbar className='header'>
                   <div className='p-3'>
                        <span className='text-primary fw-bold text-uppercase mt-1' >
                            <i className='bx bxs-buildings'></i>  CAFM
                        </span>
                        <div className='float-end' >
                            <button type="button" className="btn text-nowrap d-inline-block">
                                <span className="tf-icons bx bx-xs bx-bell"></span>
                                <span className="badge rounded-pill bg-danger text-white badge-notifications">5</span>
                            </button>
                        </div>
                   </div>
                </IonToolbar>
            </IonHeader>
        </>
    )
}

export default HeaderComponent
