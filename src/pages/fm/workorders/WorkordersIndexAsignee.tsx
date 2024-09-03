import React, { useState } from 'react';
import { IonModal, IonContent, IonHeader, IonToolbar} from '@ionic/react';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

const WorkordersIndexAsignee = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkOrder, setSelectedWorkOrder] = useState(null);

  const workOrders = [
    {
      title: "Fix Air Conditioner",
      description: "Repair the air conditioner in room 101.",
      checklist: [
        { item: "Check thermostat", completed: true },
        { item: "Replace filter", completed: true },
        { item: "Inspect ducts", completed: true },
      ],
      photos: ["https://via.placeholder.com/100"], // Example photo URL
      completed: true,
    },
    {
      title: "Replace Light Bulbs",
      description: "Replace all light bulbs in the hallway.",
      checklist: [
        { item: "Buy new bulbs", completed: true },
        { item: "Replace old bulbs", completed: true },
        { item: "Test new bulbs", completed: true },
      ],
      photos: ["https://via.placeholder.com/100"], // Example photo URL
      completed: true,
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

  return (
    <MasterComponent page='fm'>
      <TitleComponent title="Work Order History" />
      <div className="row mt-3">
        {workOrders.map((workOrder, index) => (
          <div className="col-12 mb-3 animate__animated animate__bounceInLeft" key={index}>
            <div className="card">
              <div className="card-body">
                <h5>{workOrder.title}</h5>
                <p>{workOrder.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(workOrder)}
                >
                  View Details
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
                            readOnly
                        />{' '}
                        {item.item}
                        </li>
                    ))}
                    </ul>
                    <div className="mt-3">
                    <h6>Photos</h6>
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
                </div>
                </div>
            </div>
            )}
        </IonContent>
        </IonModal>

    </MasterComponent>
  );
};

export default WorkordersIndexAsignee;
