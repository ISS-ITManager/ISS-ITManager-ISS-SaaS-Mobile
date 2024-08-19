// import React, { useState } from 'react';
// import { IonModal, IonContent, IonButton } from '@ionic/react';
// import MasterComponent from '../.././../components/layouts/MasterComponent';
// import TitleComponent from '../.././../components/layouts/TitleComponent';
// import Chart from 'react-apexcharts';

// const DashboardIndex = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [selectedWorkOrder, setSelectedWorkOrder] = useState(null);

//     const workOrders = [
//         {
//             title: "Fix Air Conditioner",
//             description: "Repair the air conditioner in room 101.",
//             checklist: [
//                 { item: "Check thermostat", completed: false },
//                 { item: "Replace filter", completed: false },
//                 { item: "Inspect ducts", completed: false }
//             ],
//             photos: []
//         },
//         {
//             title: "Fix Air Conditioner",
//             description: "Repair the air conditioner in room 101.",
//             checklist: [
//                 { item: "Check thermostat", completed: false },
//                 { item: "Replace filter", completed: false },
//                 { item: "Inspect ducts", completed: false }
//             ],
//             photos: []
//         },
//         {
//             title: "Fix Air Conditioner",
//             description: "Repair the air conditioner in room 101.",
//             checklist: [
//                 { item: "Check thermostat", completed: false },
//                 { item: "Replace filter", completed: false },
//                 { item: "Inspect ducts", completed: false }
//             ],
//             photos: []
//         },
//         // Add more work orders here
//     ];

//     const openModal = (workOrder) => {
//         setSelectedWorkOrder(workOrder);
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const handleChecklistChange = (index) => {
//         const updatedChecklist = [...selectedWorkOrder.checklist];
//         updatedChecklist[index].completed = !updatedChecklist[index].completed;
//         setSelectedWorkOrder({ ...selectedWorkOrder, checklist: updatedChecklist });
//     };

//     const handleAddPhoto = (photo) => {
//         const updatedPhotos = [...selectedWorkOrder.photos, photo];
//         setSelectedWorkOrder({ ...selectedWorkOrder, photos: updatedPhotos });
//     };

//     const handleSubmitTask = () => {
//         // Handle task submission logic
//         closeModal();
//     };

//     const chartOptions = {
//         chart: {
//             id: 'assigned-workorders-chart',
//             toolbar: {
//                 show: true,
//             },
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//             title: {
//                 text: 'Months',
//             },
//         },
//         yaxis: {
//             title: {
//                 text: 'Number of Assigned Work Orders',
//             },
//         },
//         title: {
//             text: 'Assigned Work Orders',
//             align: 'left',
//         },
//         stroke: {
//             curve: 'smooth',
//         },
//         markers: {
//             size: 5,
//         },
//         grid: {
//             borderColor: '#e7e7e7',
//         },
//     };

//     const chartSeries = [
//         {
//             name: 'Assigned Work Orders',
//             data: [5, 10, 8, 15, 12, 18, 10, 14], // Replace with actual data
//         },
//     ];

//     return (
//         <MasterComponent>
//             <TitleComponent title="Asignee Dashboard" />
//             <div className="card">
//                 <div className="card-body">
//                     <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 {workOrders.map((workOrder, index) => (
//                     <div className="col-12 mb-3" key={index}>
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5>{workOrder.title}</h5>
//                                 <p>{workOrder.description}</p>
//                                 <button
//                                     className="btn btn-primary"
//                                     onClick={() => openModal(workOrder)}
//                                 >
//                                     Open Work Order
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <IonModal isOpen={showModal} onDidDismiss={closeModal}>
//                 <IonContent>
//                     {selectedWorkOrder && (
//                         <div className="container">
//                             <div className="row mt-3">
//                                 <div className="col-8">
//                                     <h5 className="text-primary">{selectedWorkOrder.title}</h5>
//                                 </div>
//                                 <div className="col-4 mb-3">
//                                     <button
//                                         className="btn btn-primary float-end rounded-pill"
//                                         onClick={closeModal}
//                                     >
//                                         <i className="fa fa-times"></i>
//                                     </button>
//                                 </div>
//                                 <div className="col-12">
//                                     <p>{selectedWorkOrder.description}</p>
//                                     <h6>Checklist</h6>
//                                     <ul className="list-group">
//                                         {selectedWorkOrder.checklist.map((item, index) => (
//                                             <li className="list-group-item" key={index}>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={item.completed}
//                                                     onChange={() => handleChecklistChange(index)}
//                                                 />{' '}
//                                                 {item.item}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <div className="mt-3">
//                                         <h6>Photos</h6>
//                                         <input
//                                             className='form-control'
//                                             type="file"
//                                             accept="image/*"
//                                             onChange={(e) =>
//                                                 e.target.files &&
//                                                 handleAddPhoto(URL.createObjectURL(e.target.files[0]))
//                                             }
//                                         />
//                                         {/* <input type="file" name="" className='form-control' id="" /> */}
//                                         <div className="mt-2">
//                                             {selectedWorkOrder.photos.map((photo, index) => (
//                                                 <img
//                                                     src={photo}
//                                                     alt={`Work Order Photo ${index}`}
//                                                     key={index}
//                                                     style={{ width: '100px', marginRight: '10px' }}
//                                                 />
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <div className="mt-3 text-center">
//                                         <button className="btn btn-primary" onClick={handleSubmitTask}>
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </IonContent>
//             </IonModal>
//         </MasterComponent>
//     );
// };

// export default DashboardIndex;

import React, { useState } from 'react';
import { IonModal, IonContent, IonHeader, IonToolbar } from '@ionic/react';
import MasterComponent from '../.././../components/layouts/MasterComponent';
import TitleComponent from '../.././../components/layouts/TitleComponent';
import Chart from 'react-apexcharts';

const DashboardIndex = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedWorkOrder, setSelectedWorkOrder] = useState(null);

    const workOrders = [
        {
            title: "Install New Light Fixtures",
            description: "Install new light fixtures in the conference room.",
            checklist: [
                { item: "Remove old fixtures", completed: false },
                { item: "Install new fixtures", completed: false },
                { item: "Test lights", completed: false }
            ],
            photos: []
        },
        {
            title: "Repair Office Door",
            description: "Fix the broken hinge on the office door.",
            checklist: [
                { item: "Remove broken hinge", completed: false },
                { item: "Install new hinge", completed: false },
                { item: "Test door alignment", completed: false }
            ],
            photos: []
        },
        {
            title: "Service Elevator",
            description: "Perform routine maintenance on the elevator.",
            checklist: [
                { item: "Check cables", completed: false },
                { item: "Lubricate moving parts", completed: false },
                { item: "Test emergency brakes", completed: false }
            ],
            photos: []
        },
        {
            title: "Paint Office Walls",
            description: "Repaint the walls in the main office area.",
            checklist: [
                { item: "Move furniture", completed: false },
                { item: "Apply primer", completed: false },
                { item: "Paint walls", completed: false }
            ],
            photos: []
        },
        // Add more work orders here
    ];

    const openModal = (workOrder) => {
        setSelectedWorkOrder(workOrder);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleChecklistChange = (index) => {
        const updatedChecklist = [...selectedWorkOrder.checklist];
        updatedChecklist[index].completed = !updatedChecklist[index].completed;
        setSelectedWorkOrder({ ...selectedWorkOrder, checklist: updatedChecklist });
    };

    const handleAddPhoto = (photo) => {
        const updatedPhotos = [...selectedWorkOrder.photos, photo];
        setSelectedWorkOrder({ ...selectedWorkOrder, photos: updatedPhotos });
    };

    const handleSubmitTask = () => {
        // Handle task submission logic
        closeModal();
    };

    const chartOptions = {
        chart: {
            id: 'assigned-workorders-chart',
            toolbar: {
                show: true,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            title: {
                text: 'Months',
            },
        },
        yaxis: {
            title: {
                text: 'Number of Assigned Work Orders',
            },
        },
        title: {
            text: 'Assigned Work Orders',
            align: 'left',
        },
        stroke: {
            curve: 'smooth',
        },
        markers: {
            size: 5,
        },
        grid: {
            borderColor: '#e7e7e7',
        },
    };

    const chartSeries = [
        {
            name: 'Assigned Work Orders',
            data: [5, 10, 8, 15, 12, 18, 10, 14], // Replace with actual data
        },
    ];

    return (
        <MasterComponent>
            <TitleComponent title="Assignee Dashboard" />
            <div className="card">
                <div className="card-body">
                    <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
                </div>
            </div>
            <div className="row mt-3">
                {workOrders.map((workOrder, index) => (
                    <div
                        className="col-12 mb-3 animate__animated animate__fadeInUp"
                        key={index}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h5>{workOrder.title}</h5>
                                <p>{workOrder.description}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => openModal(workOrder)}
                                >
                                    Open Work Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <IonModal isOpen={showModal} onDidDismiss={closeModal}>
            <IonHeader>
                <IonToolbar style={{ '--background': 'transparent', '--border-color': 'transparent', '--ion-toolbar-border-width': '0px' }}>
                    <div className="col-4 mb-3" slot="end">
                        <button className='btn mt-2 btn-primary float-end rounded-pill' onClick={closeModal}>
                            <i className='fa fa-times'></i> 
                        </button>
                    </div>
                </IonToolbar>
            </IonHeader>
                <IonContent>
                    {selectedWorkOrder && (
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-8">
                                    <h5 className="text-primary">{selectedWorkOrder.title}</h5>
                                </div>
                                {/* <div className="col-4 mb-3">
                                    <button
                                        className="btn btn-primary float-end rounded-pill"
                                        onClick={closeModal}
                                    >
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div> */}
                                <div className="col-12">
                                    <p>{selectedWorkOrder.description}</p>
                                    <h6>Checklist</h6>
                                    <ul className="list-group">
                                        {selectedWorkOrder.checklist.map((item, index) => (
                                            <li className="list-group-item" key={index}>
                                                <input
                                                    type="checkbox"
                                                    checked={item.completed}
                                                    onChange={() => handleChecklistChange(index)}
                                                />{' '}
                                                {item.item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <h6>Photos</h6>
                                        <input
                                            className='form-control'
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                e.target.files &&
                                                handleAddPhoto(URL.createObjectURL(e.target.files[0]))
                                            }
                                        />
                                        <div className="mt-2">
                                            {selectedWorkOrder.photos.map((photo, index) => (
                                                <img
                                                    src={photo}
                                                    alt={`Work Order Photo ${index}`}
                                                    key={index}
                                                    style={{ width: '100px', marginRight: '10px' }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button className="btn btn-primary" onClick={handleSubmitTask}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </IonContent>
            </IonModal>
        </MasterComponent>
    );
};

export default DashboardIndex;
