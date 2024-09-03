import React, { useEffect, useState } from 'react';
import { IonContent, IonGrid, IonMenu, useIonViewWillLeave, IonRow, IonCol, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import Image from '../constants/Image';
import useGoToPage from '../../functions/useGoToPage';

const SidebarComponent = () => {
    const goToPage = useGoToPage();
    let ionMenuRef = React.useRef(null);

    useIonViewWillLeave(() => {
        if (ionMenuRef.current) {
            ionMenuRef.current.close();
        }
    });
    return (
        <IonMenu side='start' contentId="main-content" ref={ionMenuRef}>
            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow className='mt-5'>
                        <IonCol size='auto'>
                            <img src={Image.UserImage} className='w-px-50 h-auto rounded-circle' alt="" />
                        </IonCol>
                        <IonCol>
                            <b className='text-primary'>Username</b><br />
                            <span> test@test1.com </span>
                        </IonCol>
                    </IonRow>
                    <IonRow className='mt-5'>
                        <IonCol>
                            <span className="text-muted text-uppercase">Menu</span>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList lines="none" className='bg'>
                    <IonItem onClick={() => goToPage('/main-dashboard')}>
                        <a className='ms-2'><i className='bx bx-globe me-2'></i>HOME </a>
                    </IonItem>
                    <IonItem onClick={() => goToPage('/theme')}>
                        <a className='ms-2'><i className='bx bx-briefcase me-2'></i>ITSM </a>
                    </IonItem>
                    <IonItem onClick={() => goToPage('/fm')}>
                        <a className='ms-2'><i className='bx bx-buildings me-2'></i>FM </a>
                    </IonItem>
                    <IonItem>
                        <a className='ms-2'><i className='bx bx-group me-2'></i>HRSM </a>
                    </IonItem>
                </IonList>
                <IonGrid>
                    <IonRow className='mt-3'>
                        <IonCol>
                            <span className="text-muted text-uppercase">Account Settings</span>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList lines="none" className='bg'>
                    <IonItem onClick={() => goToPage('/profile')}>
                        <a className='ms-2'><i className='bx bx-user me-2'></i>Profile </a>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default SidebarComponent;