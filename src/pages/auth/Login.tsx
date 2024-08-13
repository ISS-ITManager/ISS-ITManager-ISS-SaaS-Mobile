import { IonApp, IonContent, IonFooter, IonPage, useIonViewWillLeave } from '@ionic/react'
import React from 'react'
import Image from '../../components/constants/Image'
import BrandComponent from '../../components/layouts/BrandComponent'
import { useHistory, useLocation  } from 'react-router-dom';
const Login = () => {
    
    const history = useHistory();
    
    let ionMenuRef = React.useRef(null);
    const navigateTo = (path) => {
        history.push(path);
    };
    useIonViewWillLeave(() => {
        if (ionMenuRef.current) {
            ionMenuRef.current.close();
        }
    });
  return (
    <IonApp>
        <IonPage className='ion-padding login-page' >
            <IonContent  ref={ionMenuRef} forceOverscroll={false}>
                <div className="container d-flex flex-column p-5 justify-content-center" style={{ height: '70vh' }}>
                    {/* <div className="row">
                        <div className="col-12 ">
                            <img src={Image.Canteen} alt="" />
                            <div className="card">
                                <div className="card-body ">
                                
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <BrandComponent/> */}
                    <div className="row mt-3">
                        <div className="col-12 text-center mb-5 mt">
                            <i className='bx bxs-buildings text-primary' style={{fontSize : "4em"}}></i> <br />
                            <span className='fw-bold text-primary h1'>
                            CAFM
                            </span> <br />
                            <span className="h5 text-dark">Computer Aided Facility Management</span>
                        </div>
                        <div className="col-12">
                            <span className='fw-bold text-dark h3'>SIGN IN</span>
                            
                        </div>
                        <div className="col-12 mb-2">
                            <span>Username</span>
                            <input type="text" className='form-control form-control-lg rounded-pill' placeholder='Username here...' />
                        </div>
                        <div className="col-12 mb-2">
                            <span>Password</span>
                            <input type="password" className='form-control form-control-lg rounded-pill' placeholder='Password here...' />
                        </div>
                        <div className="col-12 mt-2">
                            <button className='btn w-100 btn-primary btn-lg rounded-pill' onClick={() => navigateTo('/dashboard')}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </IonContent>
            <IonFooter className='text-center'>
                <img src={Image.orgLogo} className='w-25' alt="" /> <br />
                <small>Copyright 2024</small>
            </IonFooter>
        </IonPage>
    </IonApp>
  )
}

export default Login
