import React, { useState, useEffect } from 'react';
import { FaSearch, FaServer, FaNetworkWired, FaCode, FaDatabase } from 'react-icons/fa';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';

// Mock data (replace with real data or API call)
const mockIncidentData = [
    { id: 1, date: '2024-08-30', description: 'Server downtime', status: 'Resolved', type: 'server' },
    { id: 2, date: '2024-08-29', description: 'Network issue', status: 'Pending', type: 'network' },
    { id: 3, date: '2024-08-28', description: 'Application crash', status: 'In Progress', type: 'application' },
    { id: 4, date: '2024-08-27', description: 'Database issue', status: 'Resolved', type: 'database' }
];

const Incident_Request_History: React.FC = () => {
    const [incidents, setIncidents] = useState(mockIncidentData);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch incident data here if needed
        // e.g., setIncidents(fetchIncidentData());
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredIncidents = incidents.filter(incident =>
        incident.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getIcon = (type: string) => {
        switch (type) {
            case 'server':
                return <FaServer />;
            case 'network':
                return <FaNetworkWired />;
            case 'application':
                return <FaCode />;
            case 'database':
                return <FaDatabase />;
            default:
                return <FaServer />;
        }
    };

    return (
        <MasterComponent page='incident-request-history'>
            <TitleComponent title="Incident Request History" />
            <div className="container mt-4">
                {/* Search Input */}
                <div className="row mb-4">
                    <div className="col-12 col-md-8 offset-md-2">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search incidents..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <span className="input-group-text">
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                </div>

                {/* List with Icons */}
                <div className="row">
                    {filteredIncidents.map((incident) => (
                        <div key={incident.id} className="col-12 mb-3">
                            <div className="d-flex align-items-center p-3 border rounded">
                                <div className="me-3">
                                    {getIcon(incident.type)}
                                </div>
                                <div>
                                    <h5 className="mb-1">Incident ID: {incident.id}</h5>
                                    <p className="mb-1">Date: {incident.date}</p>
                                    <p className="mb-1">Description: {incident.description}</p>
                                    <p className={`font-weight-bold ${incident.status.toLowerCase()}`}>
                                        Status: {incident.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MasterComponent>
    );
};

export default Incident_Request_History;
