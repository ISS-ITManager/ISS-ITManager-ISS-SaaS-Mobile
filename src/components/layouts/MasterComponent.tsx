import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/layouts/HeaderComponent'
import { IonApp, IonPage, IonContent, IonSpinner } from '@ionic/react';
import FooterComponent from './FooterComponent';
import BrandComponent from './BrandComponent';
import SidebarComponent from './SidebarComponent';

const MasterComponent = ({ children, page }) => {


  return (
    <>
      <IonApp>
        <SidebarComponent />
        <IonPage id="main-content">
          <HeaderComponent />
          <IonContent className="ion-padding content-body">
            {children}
            <BrandComponent />
          </IonContent>
          {page !== "main" && <FooterComponent module={page} />}
        </IonPage>
      </IonApp>
    </>
  )
}

export default MasterComponent
