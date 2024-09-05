import React, { useState, useEffect } from 'react'
import { IonButton, IonHeader, IonMenuToggle, IonToolbar } from '@ionic/react';
import { menuController } from '@ionic/core/components';

const HeaderComponent = () => {

    const toggleMenu = async () => {
        
        await menuController.toggle('main-menu');
    };

    return (
        <>            
            <IonHeader>
                <IonToolbar className='header'>
                    <div className='p-3'>
                        <button className="btn btn-sm btn-outline-primary mt-2 rounded-pill" onClick={toggleMenu} >
                            <i className="bx bx-menu"></i>
                        </button>
                        <span className='text-primary fw-bold text-uppercase mt-1 m-3' >
                            <i className='bx bx-globe mb-2'></i>  ISSPHERE
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
