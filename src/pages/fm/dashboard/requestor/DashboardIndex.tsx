import React, { useState } from 'react';
import MasterComponent from '../.././../../components/layouts/MasterComponent';
import TitleComponent from '../.././../../components/layouts/TitleComponent';
import Chart from 'react-apexcharts';
import { IonContent, IonModal } from '@ionic/react';

interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Pending Admin Approval';
  assignedTo?: string;
}

interface Technician {
  id: string;
  name: string;
}

interface NewRequest {
  title: string;
  description: string;
  location: string;
}

const DashboardIndex: React.FC = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([
    { id: '1', title: 'Fix AC', description: 'Repair the AC unit in Room 101', status: 'Pending' },
    { id: '2', title: 'Install Projector', description: 'Install the new projector in the conference room', status: 'In Progress' },
    { id: '3', title: 'Paint Wall', description: 'Paint the wall in the main lobby', status: 'Completed' },
  ]);
  const [technicians, setTechnicians] = useState<Technician[]>([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ]);
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | null>(null);
  const [selectedTechnician, setSelectedTechnician] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [newRequest, setNewRequest] = useState<NewRequest>({ title: '', description: '', location: '' });

  const handleAssignWorkOrder = () => {
    if (selectedWorkOrder && selectedTechnician) {
      setWorkOrders(prevWorkOrders =>
        prevWorkOrders.map(order =>
          order.id === selectedWorkOrder.id
            ? { ...order, assignedTo: selectedTechnician, status: 'In Progress' }
            : order
        )
      );
      setSelectedWorkOrder(null);
      setSelectedTechnician('');
    }
  };

  const handleApproveWorkOrder = (id: string) => {
    setWorkOrders(prevWorkOrders =>
      prevWorkOrders.map(order =>
        order.id === id ? { ...order, status: 'Pending Admin Approval' } : order
      )
    );
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewRequest(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitRequest = () => {
    const newWorkOrder: WorkOrder = {
      id: (workOrders.length + 1).toString(),
      title: newRequest.title,
      description: newRequest.description,
      status: 'Pending',
    };
    setWorkOrders([...workOrders, newWorkOrder]);
    setNewRequest({ title: '', description: '', location: '' });
  };

  const chartOptions = {
    chart: {
      id: 'work-orders-chart',
    },
    xaxis: {
      categories: workOrders.map(order => order.title),
    },
  };

  const chartSeries = [
    {
      name: 'Status',
      data: workOrders.map(order => {
        switch (order.status) {
          case 'Pending': return 1;
          case 'In Progress': return 2;
          case 'Completed': return 3;
          default: return 0;
        }
      }),
    },
  ];

  return (
    <MasterComponent page="fm">
      <TitleComponent title="FM" subtitle={"Requestor Dashboard"} />
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button
                className={`btn btn-outline-primary animate__animated animate__bounceInRight ${activeTab === 'overview' ? 'active animate__animated animate__bounceInRight' : ''}`}
                onClick={() => handleTabClick('overview')}
              >
                Overview
              </button>
              <button
                className={`btn btn-outline-primary animate__animated animate__bounceInRight${activeTab === 'requests' ? 'active animate__animated animate__bounceInRight' : ''}`}
                onClick={() => handleTabClick('requests')}
              >
                Work Order Requests
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="row">
            <div className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Work Orders Overview</h5>
                  <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body animate__animated animate__bounceInLeft">
                  <h5 className="card-title">Create New Work Order Request</h5>
                  <div className="row mb-3">
                      <div className="col-md-12">
                          <b className="text-info">Locality Details</b>
                      </div>
                      <div className="col-md-4 mb-2">
                          <label htmlFor="">Location Group</label>
                          <select name="#" id="" className="form-control select2">
                          <option>Select Location Group </option>
                          <option value="#">Qatar - Schools</option>
                          <option value="#">United Kingdom - Nunnery</option>
                          </select>
                      </div>
                      <div className="col-md-4 mb-2">
                          <label htmlFor="">Property</label>
                          <select name="#" id="" className="form-control select2">
                          <option>Select Property </option>
                          <option value="#">Al Maha Boys</option>
                          <option value="#">Al Maha Girls</option>
                          <option value="#">Al Jazeera</option>
                          </select>
                      </div>
                      <div className="col-md-4 mb-2">
                          <label htmlFor="">Floor</label>
                          <select name="#" id="" className="form-control select2">
                          <option>Select Floor </option>
                          </select>
                      </div>
                      <div className="col-md-4 mb-2">
                          <label htmlFor="">Zone</label>
                          <select name="#" id="" className="form-control select2">
                          <option>Select Zone </option>
                          </select>
                      </div>
                      <div className="col-md-4 mb-2">
                          <label htmlFor="">Space</label>
                          <select name="#" id="" className="form-control select2">
                          <option>Select Space </option>
                          </select>
                      </div>
                  </div>
                      
                  <div className="row mb-3">
                      <div className="col-md-12">
                          <b className="text-info">Work Details</b>
                      </div>
                      <div className="col-md-4">
                          <label htmlFor="">Work Type</label>
                          <select name="#" id="" className="form-control select2">
                          <option value="#">Planned</option>
                          <option value="#">General</option>
                          <option value="#">Corrective</option>
                          </select>
                      </div>
                      <div className="col-12">
                          <label htmlFor="">Estimated Cost</label>
                          <input type="number" className="form-control" name="" id=""  />
                      </div>
                     
                      <div className="col-md-8">
                          <label htmlFor=""> Work Instruction</label>
                          <input type="number" className="form-control" placeholder="This is sample work instruction" name="" id="" />
                      </div>
                      <div className="col-12 text-center mt-3">
                      <button className="btn btn-primary" onClick={handleSubmitRequest}>
                        Submit Request
                      </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <IonModal isOpen={!!selectedWorkOrder} onDidDismiss={() => setSelectedWorkOrder(null)}>
          <IonContent>
            <div className="container">
              <div className="row my-3">
                <div className="col-12">
                  <h5 className="text-primary">Assign Work Order</h5>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Techniciansss</label>
                    <select
                      className="form-select"
                      value={selectedTechnician}
                      onChange={e => setSelectedTechnician(e.target.value)}
                    >
                      <option value="">Select Technician</option>
                      {technicians.map(tech => (
                        <option key={tech.id} value={tech.id}>
                          {tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={handleAssignWorkOrder}>
                      Assign
                    </button>
                    <button className="btn btn-light" onClick={() => setSelectedWorkOrder(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonModal>
      </div>
    </MasterComponent>
  );
};

export default DashboardIndex;
