import React, { useEffect, useRef, useState, useContext, createContext, useImperativeHandle } from 'react';
import { IonContent, IonGrid, IonMenu, useIonViewWillLeave, IonRow, IonCol, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import Image from '../constants/Image';
import useGoToPage from '../../functions/useGoToPage';
import { useMenu } from '../../functions/MenuContext';


const SidebarComponent = ({ module }) => {
    const goToPage = useGoToPage();
    const menuRef = useRef<HTMLIonMenuElement>(null);
    const [currentModule, setCurrentModule] = useState(module);

    useIonViewWillLeave(() => {
        if (menuRef.current) {
            menuRef.current.close();
        }
    });

    const handleLogout = () => {
        if (menuRef.current) {
            menuRef.current.close();
        }
        goToPage('/login');
    };

    useEffect(() => {
        setCurrentModule(module);

    }, [])

    const handleSelectItem = (path) => {
        goToPage(path);
        if (menuRef.current) {
            menuRef.current.close();
        }
    }

    return (
        <IonMenu side="start" contentId="main-content" menuId="main-menu" ref={menuRef}>
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
                    <IonItem onClick={() => handleSelectItem('/main-dashboard')}>
                        {module === "main" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>Home</span> : <a className='ms-2'><i className='bx bx-globe me-2'></i>HOME </a>}

                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/itsm/dashboard')}>
                        {module === "itsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>ITSM</span> :
                            <a className='ms-2'><i className='bx bx-briefcase me-2'></i>ITSM </a>}
                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/fm')}>
                        {module === "fm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>FM</span> : <a className='ms-2'><i className='bx bx-buildings me-2'></i>FM </a>}
                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/hrsm/attendance')}>
                        {module === "hrsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>HRSM</span> : <a className='ms-2'><i className='bx bx-group me-2'></i>HRSM </a>}
                    </IonItem>
                </IonList>
                <IonGrid>
                    <IonRow className='mt-3'>
                        <IonCol>
                            <span className="text-muted text-uppercase">Support</span>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList lines="none" className='bg'>
                    <IonItem onClick={() => handleSelectItem('/agent-chat')}>
                        <a className='ms-2'><i className='bx bx-support me-2'></i>Agent Chat</a>
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
                    <IonItem onClick={() => handleSelectItem('/profile')}>
                        <a className='ms-2'><i className='bx bx-user me-2'></i>Profile </a>
                    </IonItem>
                    <IonItem onClick={handleLogout}>
                        <a className='ms-2'><i className='bx bx-power-off me-2'></i>Logout </a>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default SidebarComponent;