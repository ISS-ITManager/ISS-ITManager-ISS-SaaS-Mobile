import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const DashboardIndex: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Technician Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, Technician!</h2>
        <p>This is your dashboard where you can view your profile and assigned tasks.</p>
        {/* Add specific features/components for technician here */}
      </IonContent>
    </IonPage>
  );
};

export default DashboardIndex;
