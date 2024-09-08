// import React, { useEffect, useRef, useState, useContext, createContext, useImperativeHandle } from 'react';
// import { IonContent, IonGrid, IonMenu, useIonViewWillLeave, IonRow, IonCol, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
// import Image from '../constants/Image';
// import useGoToPage from '../../functions/useGoToPage';
// import BrandComponent from './BrandComponent';


// const SidebarComponent = () => {
//     const goToPage = useGoToPage();
//     const menuRef = useRef<HTMLIonMenuElement>(null);
//     const [currentModule, setCurrentModule] = useState(localStorage.getItem("currentModule"));

//     useIonViewWillLeave(() => {
//         if (menuRef.current) {
//             menuRef.current.close();
//         }
//     });

//     const handleLogout = () => {
//         if (menuRef.current) {
//             menuRef.current.close();
//         }
//         goToPage('/login');
//     };


//     const handleSelectItem = (path, mod) => {
//         goToPage(path);
//         if (menuRef.current) {
//             menuRef.current.close();
//         }
//         setCurrentModule(mod);
//         localStorage.setItem("currentModule", mod);
//     }


//     return (
//         <IonMenu side="start" contentId="main-content" menuId="main-menu" ref={menuRef}>
//             <IonContent className='ion-padding'>
//                 <IonGrid>
//                     <IonRow className='mt-5'>
//                         <IonCol size='auto'>
//                             <img src={Image.UserImage} className='w-px-50 h-auto rounded-circle' alt="" />
//                         </IonCol>
//                         <IonCol>
//                             <b className='text-primary'>Username</b><br />
//                             <span> test@test1.com </span>
//                         </IonCol>
//                     </IonRow>
//                     <IonRow className='mt-5'>
//                         <IonCol>
//                             <span className="text-muted text-uppercase">Menu</span>
//                         </IonCol>
//                     </IonRow>
//                 </IonGrid>
//                 <IonList lines="none" className='bg'>
//                     <IonItem onClick={() => handleSelectItem('/main-dashboard', 'main')}>
//                         {currentModule === "main" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>Home</span> : <a className='ms-2'><i className='bx bx-globe me-2'></i>HOME </a>}

//                     </IonItem>
//                     <IonItem onClick={() => handleSelectItem('/itsm/dashboard', 'itsm')}>
//                         {currentModule === "itsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>ITSM</span> :
//                             <a className='ms-2'><i className='bx bx-briefcase me-2'></i>ITSM </a>}
//                     </IonItem>
//                     <IonItem onClick={() => handleSelectItem('/fm', 'fm')}>
//                         {currentModule === "fm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>FM</span> : <a className='ms-2'><i className='bx bx-buildings me-2'></i>FM </a>}
//                     </IonItem>
//                     <IonItem onClick={() => handleSelectItem('/hrsm/attendance', 'hrsm')}>
//                         {currentModule === "hrsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>HRSM</span> : <a className='ms-2'><i className='bx bx-group me-2'></i>HRSM </a>}
//                     </IonItem>
//                 </IonList>
//                 <IonGrid>
//                     <IonRow className='mt-3'>
//                         <IonCol>
//                             <span className="text-muted text-uppercase">Support</span>
//                         </IonCol>
//                     </IonRow>
//                 </IonGrid>
//                 <IonList lines="none" className='bg'>
//                     <IonItem onClick={() => handleSelectItem('/agent-chat', 'chat')}>
//                         {currentModule === "chat" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-support me-2'></i>Agent Chat</span> : <a className='ms-2'><i className='bx bx-support me-2'></i>Agent Chat </a>}
//                     </IonItem>
//                 </IonList>
//                 <IonGrid>
//                     <IonRow className='mt-3'>
//                         <IonCol>
//                             <span className="text-muted text-uppercase">Account Settings</span>
//                         </IonCol>
//                     </IonRow>
//                 </IonGrid>
//                 <IonList lines="none" className='bg'>
//                     <IonItem onClick={() => handleSelectItem('/profile', 'profile')}>
//                         {currentModule === "profile" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-user me-2'></i>Profile</span> : <a className='ms-2'><i className='bx bx-user me-2'></i>Profile</a>}
//                     </IonItem>
//                     <IonItem onClick={handleLogout}>
//                         <a className='ms-2'><i className='bx bx-power-off me-2'></i>Logout </a>
//                     </IonItem>
//                 </IonList>
//                 <BrandComponent />
//             </IonContent>
//         </IonMenu>
//     )
// }

// export default SidebarComponent;

import React, { useEffect, useRef, useState } from 'react';
import { IonContent, IonGrid, IonMenu, useIonViewWillLeave, IonRow, IonCol, IonList, IonItem } from '@ionic/react';
import Image from '../constants/Image';
import useGoToPage from '../../functions/useGoToPage';
import BrandComponent from './BrandComponent';
import { useModule } from '../../utilities/ModuleProvider';

const SidebarComponent = () => {
    const goToPage = useGoToPage();
    const menuRef = useRef<HTMLIonMenuElement>(null);
    const { currentModule, updateModule } = useModule();

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

    const handleSelectItem = (path, mod) => {
        goToPage(path);
        if (menuRef.current) {
            menuRef.current.close();
        }
        updateModule(mod);  
    };

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
                    <IonItem onClick={() => handleSelectItem('/main-dashboard', 'main')}>
                        {currentModule === "main" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>Home</span> : <a className='ms-2'><i className='bx bx-globe me-2'></i>HOME </a>}
                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/itsm/dashboard', 'itsm')}>
                        {currentModule === "itsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>ITSM</span> :
                            <a className='ms-2'><i className='bx bx-briefcase me-2'></i>ITSM </a>}
                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/fm', 'fm')}>
                        {currentModule === "fm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>FM</span> : <a className='ms-2'><i className='bx bx-buildings me-2'></i>FM </a>}
                    </IonItem>
                    <IonItem onClick={() => handleSelectItem('/hrsm/attendance', 'hrsm')}>
                        {currentModule === "hrsm" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-globe me-2'></i>HRSM</span> : <a className='ms-2'><i className='bx bx-group me-2'></i>HRSM </a>}
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
                    <IonItem onClick={() => handleSelectItem('/agent-chat', 'chat')}>
                        {currentModule === "chat" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-support me-2'></i>Agent Chat</span> : <a className='ms-2'><i className='bx bx-support me-2'></i>Agent Chat </a>}
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
                    <IonItem onClick={() => handleSelectItem('/profile', 'profile')}>
                        {currentModule === "profile" ? <span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'><i className='bx bx-user me-2'></i>Profile</span> : <a className='ms-2'><i className='bx bx-user me-2'></i>Profile</a>}
                    </IonItem>
                    <IonItem onClick={handleLogout}>
                        <a className='ms-2'><i className='bx bx-power-off me-2'></i>Logout </a>
                    </IonItem>
                </IonList>
                <BrandComponent />
            </IonContent>
        </IonMenu>
    );
};

export default SidebarComponent;
