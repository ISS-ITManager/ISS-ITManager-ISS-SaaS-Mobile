// import React from 'react';
// import MasterComponent from '../../components/layouts/MasterComponent';
// import TitleComponent from '../../components/layouts/TitleComponent';

// const ProfileIndex = () => {

//     const handleLogout = () => {
//         // Clear local storage
//         localStorage.clear();
        
//         // Redirect to login page
//         window.location.href = './login';
//     };

//     return (
//         <MasterComponent>
//             <TitleComponent title={"Profile"} />
//             <div className="card mb-3 animate__animated animate__bounceInLeft border border-light">
//                 <div className="card-body text-center">
//                     <img src="https://cdn-icons-png.flaticon.com/512/7405/7405892.png" className='w-25' alt="" /> <p />
//                     <span className='fw-bold mt-3 h4'>John Doe</span><br />
//                     <div className="row">
//                         <div className="col-12 text-start">
//                             <small className='fw-bold text-primary'>QID</small> <br />
//                             12345678901
//                         </div>
//                         <div className="col-12 text-start">
//                             <small className='fw-bold text-primary'>Classification</small> <br />
//                             Technician
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="card animate__animated animate__bounceInRight">
//                 <div className="card-header text-primary fw-bold border border-light">
//                     Settings
//                 </div>
//                 <div className="card-body">
//                     <div className="mb-3 list-group list-group-flush">
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <b className='text-primary'>Account Settings</b>
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <i className='bx bx-lock-open-alt me-2 ms-2'></i> Change Password
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <i className='bx bx-user me-2 ms-2'></i> Update Profile
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <b className='text-primary'>App Settings</b>
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <i className='bx bx-mobile-alt me-2 ms-2'></i> App Version
//                         </a>
//                         <a href="#" className="list-group-item list-group-item-action">
//                             <i className='bx bx-moon me-2 ms-2'></i> App Theme
//                         </a>
//                     </div>
//                 </div>
//                 <div className="card-footer p-0 text-center">
//                     <button className='mb-3 btn btn-label-danger' onClick={handleLogout}>
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </MasterComponent>
//     );
// };

// export default ProfileIndex;

import React, { useEffect, useState } from 'react';
import MasterComponent from '../../components/layouts/MasterComponent';
import TitleComponent from '../../components/layouts/TitleComponent';

const ProfileIndex = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setProfile(userData); // Set the entire user data as profile
        }
    }, []);

    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();
        
        // Redirect to login page
        window.location.href = './login';
    };

    if (!profile) {
        return <div>Loading...</div>; 
    }

    return (
        <MasterComponent page="main">
            <TitleComponent title={"Profile"} />
            <div className="card mb-3 animate__animated animate__bounceInLeft border border-light">
                <div className="card-body text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/7405/7405892.png" className='w-25' alt="" /> <p />
                    <span className='fw-bold mt-3 h4'>{profile.profile.first_name} {profile.profile.last_name}</span><br />
                    <div className="row">
                        <div className="col-12 text-start">
                            <small className='fw-bold text-primary'>QID</small> <br />
                            {profile.profile.qid}
                        </div>
                        <div className="col-12 text-start">
                            <small className='fw-bold text-primary'>Classification</small> <br />
                            {profile.role.role}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card animate__animated animate__bounceInRight">
                <div className="card-header text-primary fw-bold border border-light">
                    Settings
                </div>
                <div className="card-body">
                    <div className="mb-3 list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action">
                            <b className='text-primary'>Account Settings</b>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className='bx bx-lock-open-alt me-2 ms-2'></i> Change Password
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className='bx bx-user me-2 ms-2'></i> Update Profile
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <b className='text-primary'>App Settings</b>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className='bx bx-mobile-alt me-2 ms-2'></i> App Version
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <i className='bx bx-moon me-2 ms-2'></i> App Theme
                        </a>
                    </div>
                </div>
                <div className="card-footer p-0 text-center">
                    <button className='mb-3 btn btn-label-danger' onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </MasterComponent>
    );
};

export default ProfileIndex;
