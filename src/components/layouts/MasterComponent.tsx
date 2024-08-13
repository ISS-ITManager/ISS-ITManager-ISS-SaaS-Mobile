import React, {useEffect, useState} from 'react'
import HeaderComponent from '../../components/layouts/HeaderComponent'
import {IonApp, IonPage, IonContent, IonSpinner } from '@ionic/react';
import FooterComponent from './FooterComponent';
import BrandComponent from './BrandComponent';

const MasterComponent = ({ children }) => {


  return (
    <>  
        <IonApp>
        <HeaderComponent/>
          <IonContent className="ion-padding content-body">
            {children}
            <BrandComponent />
          </IonContent>
        <FooterComponent/>
        </IonApp>
    </>
  )
}

export default MasterComponent
