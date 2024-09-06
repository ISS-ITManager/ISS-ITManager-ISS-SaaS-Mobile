import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/layouts/HeaderComponent'
import { IonApp, IonPage, IonContent, IonSpinner, IonRouterOutlet } from '@ionic/react';
import FooterComponent from './FooterComponent';
import BrandComponent from './BrandComponent';
import SidebarComponent from './SidebarComponent';

const MasterComponent = ({ children, page }) => {


  return (
    <>
      <SidebarComponent />
      <IonPage>
        <HeaderComponent />
        <IonContent className="ion-padding content-body">
          {children}
          {/* <BrandComponent /> */}
        </IonContent>
        <FooterComponent />
      </IonPage>
      <IonRouterOutlet id="main-content"></IonRouterOutlet>
    </>
  )
}

export default MasterComponent
