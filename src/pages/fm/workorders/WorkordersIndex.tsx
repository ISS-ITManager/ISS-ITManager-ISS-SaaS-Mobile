import React, { useState, useEffect } from 'react';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';
import { IonContent, IonModal, IonText, IonHeader, IonToolbar } from '@ionic/react';

const WorkordersIndex = () => {
    const [showModal, setShowModal] = useState(false);
    const [workOrders, setWorkOrders] = useState([
        {
            name: "Work Order 1",
            urgency: 2,
            criticality: 2,
            site: "Al Jazeera Academy",
            historical_completion_time: 10,
            description: "Urgent maintenance on critical equipment."
        },
        {
            name: "Work Order 2",
            urgency: 3,
            criticality: 4,
            site: "Al Maha Academy for Boys",
            historical_completion_time: 5,
            description: "Routine checkup of air conditioning system."
        },
        {
            name: "Work Order 3",
            urgency: 10,
            criticality: 8,
            site: "Al Maha Academy for Girls",
            historical_completion_time: 8,
            description: "Water pipeline leak."
        }
    ]);

    useEffect(() => {
        // Function to fetch priority scores from the Flask API
        const fetchPriorityScores = async () => {
            try {
                const response = await fetch("http://192.168.25.81:5000/prioritize", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(workOrders)  // Send the hardcoded data to Flask API
                });

                if (response.ok) {
                    const data = await response.json();
                    // Update work orders with calculated priority scores
                    const updatedWorkOrders = workOrders.map(order => ({
                        ...order,
                        priorityScore: data[order.name].priority_score
                    }));
                    setWorkOrders(updatedWorkOrders);
                } else {
                    console.error("Failed to fetch priority scores from the API");
                }
            } catch (error) {
                console.error("Error fetching priority scores: ", error);
            }
        };

        fetchPriorityScores();
    }, []);  // This will run once when the component mounts

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Function to determine priority level based on score
    const getPriorityLevel = (score) => {
        if (score >= 70) return 'High';
        if (score >= 40) return 'Medium';
        return 'Low';
    };

    // Function to determine priority class based on score
    const getPriorityClass = (score) => {
        if (score >= 70) return 'danger';
        if (score >= 40) return 'warning';
        return 'info';
    };

    return (
        <MasterComponent page='fm'>
            <TitleComponent title={"Work Orders"} />

            <div className="card border border-light mb-3 animate__animated animate__bounceInLeft">
                <div className="card-body">
                    <b className='text-dark'>Current Work Order</b>
                    {workOrders.length > 0 && (
                        <span className={`badge bg-label-${getPriorityClass(workOrders[1].priorityScore)} rounded-pill float-end`}>
                            {getPriorityLevel(workOrders[1].priorityScore)}
                        </span>
                    )}
                    <br /> <br />
                    <span className='fw-bold text-info h5 mt-2'>
                        <i className='fa fa-ticket me-2'></i> {workOrders[1].name}
                    </span> <br />
                    <span className=''><i className='bx bxs-buildings'></i> Al Jazeera Academy</span> <br /><br />
                    <span>
                        {workOrders[1].description}
                    </span>
                    <div className='text-center'>
                        <button className='btn btn-primary rounded-pill mt-3' onClick={openModal}>
                            <i className='bx bx-pencil me-2'></i> Update
                        </button>
                    </div>
                </div>
            </div>

            <div className="card border border-light mb-3 animate__animated animate__bounceInRight">
                <div className="card-header">
                    <b className='text-dark'>Work Orders Priority Board</b>
                    <span className='fw-bold text-primary float-end'>
                        <i className='bx bx-right-arrow-alt'></i>
                    </span>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-timeline">
                        {workOrders.map((order, index) => (
                            <li key={index} className={`list-group-item list-group-timeline-${getPriorityClass(order.priorityScore)}`}>
                                <span>
                                    <span className='fw-bold text-primary'>W.O No. : {order.name}</span>
                                    <br /> {order.site || "Unknown Site"}
                                    <br /><small>{order.description || "Unknown Date"}</small>
                                    {/* <br /><small>{order.date || "Unknown Date"}</small> */}
                                </span>
                                <span className={`float-end badge rounded-pill bg-label-${getPriorityClass(order.priorityScore)} mt-n2`}>
                                    {getPriorityLevel(order.priorityScore)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
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
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-8 ">
                                <h5 className='text-primary fw-bold'>
                                    <i className='bx bx-pencil'></i> Update Work Orders
                                </h5>
                            </div>
                            <div className="col-12">
                                <div className="card border border-light">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <b className="text-info">Work Details</b>
                                            </div>
                                            <div className="col-md-4">
                                                <label>Main Contact</label>
                                                <select className="form-control select2">
                                                    <option>Glenn Nerrie Afurong</option>
                                                    <option>Christian Atienza</option>
                                                    <option>Errylson Delgado</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label>Service Provider</label>
                                                <select className="form-control select2">
                                                    <option>Company A</option>
                                                    <option>Company B</option>
                                                    <option>Company C</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label>Work Type</label>
                                                <select className="form-control select2">
                                                    <option>Planned</option>
                                                    <option>General</option>
                                                    <option>Corrective</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label>Estimated Cost</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                            <div className="col-6">
                                                <label>Actual Cost</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                            <div className="col-md-8">
                                                <label>Work Instruction</label>
                                                <input type="text" className="form-control" placeholder="This is sample work instruction" />
                                            </div>
                                            <div className="col-12">
                                                <span>Upload Attachments</span>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className="col-12 text-center mt-3">
                                                <button className='btn btn-primary rounded-pill'>
                                                    <i className='bx bx-save me-2'></i> Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonModal>
        </MasterComponent>
    );
};

export default WorkordersIndex;
