// import { IonApp, IonContent, IonFooter, IonPage, useIonViewWillLeave } from '@ionic/react';
// import React, { useState } from 'react';
// import Image from '../../components/constants/Image';
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [showAlert, setShowAlert] = useState(false);
    
//     const history = useHistory();
//     let ionMenuRef = React.useRef(null);

//     const sampleUsers = {
//         admin: { username: 'admin', password: 'admin', role: 'Admin' },
//         supervisor: { username: 'sup', password: 'sup', role: 'Supervisor' },
//         technician: { username: 'technician', password: 'technician', role: 'Technician' },
//     };

//     const handleLogin = () => {
//         const user = Object.values(sampleUsers).find(
//             u => u.username === username && u.password === password
//         );

//         if (user) {
//             // Save the user's role in localStorage
//             localStorage.setItem('userRole', user.role);

//             // Navigate to the appropriate dashboard based on role
//             switch (user.role) {
//                 case 'Admin':
//                     history.push('/admin-dashboard');
//                     break;
//                 case 'Supervisor':
//                     history.push('/supervisor-dashboard');
//                     break;
//                 case 'Technician':
//                     history.push('/technician-dashboard');
//                     break;
//                 default:
//                     setShowAlert(true);
//                     break;
//             }
//         } else {
//             setShowAlert(true);
//         }
//     };

//     useIonViewWillLeave(() => {
//         if (ionMenuRef.current) {
//             ionMenuRef.current.close();
//         }
//     });

//     return (
//         <IonApp>
//             <IonPage className='ion-padding login-page'>
//                 <IonContent ref={ionMenuRef} forceOverscroll={false}>
//                     <div className="container d-flex flex-column p-5 justify-content-center" style={{ height: '70vh' }}>
//                         <div className="row mt-3">
//                             <div className="col-12 text-center mb-5">
//                                 <i className='bx bxs-buildings text-primary' style={{fontSize : "4em"}}></i> <br />
//                                 <span className='fw-bold text-primary h1'>CAFM</span> <br />
//                                 <span className="h5 text-dark">Computer Aided Facility Management</span>
//                             </div>
//                             <div className="col-12">
//                                 <span className='fw-bold text-dark h3'>SIGN IN</span>
//                             </div>
//                             <div className="col-12 mb-2">
//                                 <span>Username</span>
//                                 <input 
//                                     type="text" 
//                                     className='form-control form-control-lg rounded-pill' 
//                                     placeholder='Username here...' 
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-12 mb-2">
//                                 <span>Password</span>
//                                 <input 
//                                     type="password" 
//                                     className='form-control form-control-lg rounded-pill' 
//                                     placeholder='Password here...' 
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-12 mt-2">
//                                 <button className='btn w-100 btn-primary btn-lg rounded-pill' onClick={handleLogin}>
//                                     Sign In
//                                 </button>
//                             </div>
//                             {showAlert && (
//                                 <div className="col-12 mt-2">
//                                     <div className="alert alert-danger">
//                                         Invalid username or password. Please try again.
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </IonContent>
//                 <IonFooter className='text-center'>
//                     <img src={Image.orgLogo} className='w-25' alt="" /> <br />
//                     <small>Copyright 2024</small>
//                 </IonFooter>
//             </IonPage>
//         </IonApp>
//     );
// };

// export default Login;

// -----------------------API enabled-----------------------------

import { IonApp, IonContent, IonFooter, IonPage, useIonViewWillLeave } from '@ionic/react';
import React, { useState } from 'react';
import Image from '../../components/constants/Image';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    
    const history = useHistory();
    let ionMenuRef = React.useRef(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}login`, {
                email,
                password,
            });

            if (response.data.success) {
                const { role } = response.data.data.user.role;
                const { user, access_token } = response.data.data;

                // Save the access token and user role in localStorage
                localStorage.setItem('userRole', role);
                localStorage.setItem('userData', JSON.stringify(user));
                localStorage.setItem('accessToken', access_token);

                // Navigate to the appropriate dashboard based on role
                // switch (role) {
                //     case 'Admin':
                //         history.push('/admin-dashboard');
                //         break;
                //     case 'Supervisor':
                //         history.push('/requestor-dashboard');
                //         break;
                //     case 'Asignee':
                //         history.push('/asignee-dashboard');
                //         break;
                //     case 'Requestor':
                //         history.push('/requestor-dashboard');
                //         break;
                //     default:
                //         setShowAlert(true);
                //         break;
                // }
                history.push('/main-dashboard');
            } else {
                setShowAlert(true);
            }
        } catch (error) {
            console.error('Login error:', error);
            setShowAlert(true);
        }
    };

    useIonViewWillLeave(() => {
        if (ionMenuRef.current) {
            ionMenuRef.current.close();
        }
    });

    return (
        <IonApp>
            <IonPage className='ion-padding login-page'>
                <IonContent ref={ionMenuRef} forceOverscroll={false}>
                    <div className="container d-flex flex-column p-5 justify-content-center" style={{ height: '70vh' }}>
                        <div className="row mt-3">
                            <div className="col-12 text-center mb-5">
                                <i className='bx bxs-buildings text-primary' style={{fontSize : "4em"}}></i> <br />
                                <span className='fw-bold text-primary h1'>CAFM</span> <br />
                                <span className="h5 text-dark">Computer Aided Facility Management</span>
                            </div>
                            <div className="col-12">
                                <span className='fw-bold text-dark h3'>SIGN IN</span>
                            </div>
                            <div className="col-12 mb-2">
                                <span>Username</span>
                                <input 
                                    type="text" 
                                    className='form-control form-control-lg rounded-pill' 
                                    placeholder='Username here...' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12 mb-2">
                                <span>Password</span>
                                <input 
                                    type="password" 
                                    className='form-control form-control-lg rounded-pill' 
                                    placeholder='Password here...' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-12 mt-2">
                                <button className='btn w-100 btn-primary btn-lg rounded-pill' onClick={handleLogin}>
                                    Sign In
                                </button>
                            </div>
                            {showAlert && (
                                <div className="col-12 mt-2">
                                    <div className="alert alert-danger">
                                        Invalid email or password. Please try again.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </IonContent>
                <IonFooter className='text-center'>
                    <img src={Image.orgLogo} className='w-25' alt="" /> <br />
                    <small>Copyright 2024</small>
                </IonFooter>
            </IonPage>
        </IonApp>
    );
};

export default Login;


//-------------------------------------------------------------------
// import { IonApp, IonContent, IonFooter, IonPage, useIonViewWillLeave } from '@ionic/react';
// import React, { useState } from 'react';
// import Image from '../../components/constants/Image';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showAlert, setShowAlert] = useState(false);
    
//     const history = useHistory();
//     let ionMenuRef = React.useRef(null);

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}login`, {
//                 email,
//                 password,
//             });

//             if (response.data.success) {
//                 const { user, access_token } = response.data.data;

//                 // Save the entire user data and access token in localStorage
//                 localStorage.setItem('userData', JSON.stringify(user));
//                 localStorage.setItem('accessToken', access_token);

//                 // Determine the user's role for navigation
//                 const { role } = user.role;

//                 // Navigate to the appropriate dashboard based on role
//                 switch (role) {
//                     case 'Admin':
//                         history.push('/admin-dashboard');
//                         break;
//                     case 'Supervisor':
//                         history.push('/requestor-dashboard');
//                         break;
//                     case 'Asignee':
//                         history.push('/asignee-dashboard');
//                         break;
//                     case 'Requestor':
//                         history.push('/requestor-dashboard');
//                         break;
//                     default:
//                         setShowAlert(true);
//                         break;
//                 }
//             } else {
//                 setShowAlert(true);
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             setShowAlert(true);
//         }
//     };

//     useIonViewWillLeave(() => {
//         if (ionMenuRef.current) {
//             ionMenuRef.current.close();
//         }
//     });

//     return (
//         <IonApp>
//             <IonPage className='ion-padding login-page'>
//                 <IonContent ref={ionMenuRef} forceOverscroll={false}>
//                     <div className="container d-flex flex-column p-5 justify-content-center" style={{ height: '70vh' }}>
//                         <div className="row mt-3">
//                             <div className="col-12 text-center mb-5">
//                                 <i className='bx bxs-buildings text-primary' style={{fontSize : "4em"}}></i> <br />
//                                 <span className='fw-bold text-primary h1'>CAFM</span> <br />
//                                 <span className="h5 text-dark">Computer Aided Facility Management</span>
//                             </div>
//                             <div className="col-12">
//                                 <span className='fw-bold text-dark h3'>SIGN IN</span>
//                             </div>
//                             <div className="col-12 mb-2">
//                                 <span>Username</span>
//                                 <input 
//                                     type="text" 
//                                     className='form-control form-control-lg rounded-pill' 
//                                     placeholder='Username here...' 
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-12 mb-2">
//                                 <span>Password</span>
//                                 <input 
//                                     type="password" 
//                                     className='form-control form-control-lg rounded-pill' 
//                                     placeholder='Password here...' 
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-12 mt-2">
//                                 <button className='btn w-100 btn-primary btn-lg rounded-pill' onClick={handleLogin}>
//                                     Sign In
//                                 </button>
//                             </div>
//                             {showAlert && (
//                                 <div className="col-12 mt-2">
//                                     <div className="alert alert-danger">
//                                         Invalid email or password. Please try again.
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </IonContent>
//                 <IonFooter className='text-center'>
//                     <img src={Image.orgLogo} className='w-25' alt="" /> <br />
//                     <small>Copyright 2024</small>
//                 </IonFooter>
//             </IonPage>
//         </IonApp>
//     );
// };

// export default Login;

