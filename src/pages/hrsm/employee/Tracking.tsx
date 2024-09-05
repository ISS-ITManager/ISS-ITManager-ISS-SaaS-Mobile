import React, { useState, useEffect } from 'react';
import MasterComponent from '../../../components/layouts/MasterComponent';
import TitleComponent from '../../../components/layouts/TitleComponent';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { IonSpinner } from '@ionic/react'; 
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issues in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const taskList = [
  { id: 1, name: 'Delivery Task 1', description: 'Deliver package to client A' },
  { id: 2, name: 'Pickup Task 2', description: 'Pick up documents from client B' },
  { id: 3, name: 'Meeting Task 3', description: 'Attend meeting with client C' },
];

const simulateMovement = (location) => {
  // Generate new latitude and longitude to simulate movement
  const delta = 0.001; // small change to simulate movement
  return {
    lat: location.lat + (Math.random() - 0.5) * delta,
    lon: location.lon + (Math.random() - 0.5) * delta,
  };
};

const Tracking: React.FC = () => {
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [taskStarted, setTaskStarted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<{ id: number; name: string; description: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const startTask = () => {
    setTaskStarted(true);
    setIsTracking(true);
  };

  const stopTask = () => {
    setTaskStarted(false);
    setIsTracking(false);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const MapComponent = ({ location }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.setView([location.lat, location.lon], map.getZoom(), { animate: true });
      }
    }, [location, map]);

    return null;
  };

  useEffect(() => {
    if (isTracking) {
      const simulateInterval = setInterval(() => {
        setLocation(prevLocation => prevLocation ? simulateMovement(prevLocation) : null);
      }, 1000); // Update location every 1 second

      return () => {
        clearInterval(simulateInterval);
      };
    }
  }, [isTracking]);

  return (
    <MasterComponent page="employee-tracking">
      <TitleComponent title="Employee Task Tracking" />
      <div className="container mt-4 text-center">
        {!taskStarted && (
          <>
            <h4>Select a Task to Start Tracking</h4>
            <ul className="list-group mb-4">
              {taskList.map((task) => (
                <li
                  key={task.id}
                  className={`list-group-item ${selectedTask?.id === task.id ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedTask(task)}
                >
                  {task.name}
                </li>
              ))}
            </ul>
          </>
        )}

        {selectedTask && (
          <div>
            <h5>Selected Task: {selectedTask.name}</h5>
            <p>{selectedTask.description}</p>
            {!taskStarted ? (
              <button className="btn btn-primary" onClick={startTask}>
                <i className="bi bi-play-fill"></i> Start Task
              </button>
            ) : (
              <button className="btn btn-danger" onClick={stopTask}>
                <i className="bi bi-stop-fill"></i> Stop Task
              </button>
            )}
          </div>
        )}

        <div className="mt-4">
          {loading && <IonSpinner animation="border" variant="primary" />}
          {location && isTracking && !loading ? (
            <>
              <p>
                <strong>Current Location:</strong> Latitude {location.lat}, Longitude {location.lon}
              </p>
              <MapContainer
                center={[location.lat, location.lon]} 
                zoom={13}
                style={{ height: '400px', width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.lat, location.lon]}>
                    <Popup>
                    <strong>Employee's Current Location</strong>
                    <br />
                    Latitude: {location.lat}, Longitude: {location.lon}
                    <br />
                    <small>{new Date().toLocaleString()}</small>
                    </Popup>
                </Marker>
                <MapComponent location={location} /> 
                </MapContainer>
            </>
          ) : (
            !loading && <p>Location tracking is currently disabled.</p>
          )}
        </div>
      </div>
    </MasterComponent>
  );
};

export default Tracking;
