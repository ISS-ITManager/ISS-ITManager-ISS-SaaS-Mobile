import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import MenuIndex from './pages/menu/MenuIndex';
import WalletIndex from './pages/wallet/WalletIndex';
import Login from './pages/auth/Login';
import DashboardIndex from './pages/dashboard/DashboardIndex';
import ProfileIndex from './pages/profile/ProfileIndex';
import WorkordersIndex from './pages/workorders/WorkordersIndex';
import ApprovalIndex from './pages/approval/ApprovalIndex';

import DashboardIndexSup from './pages/dashboard/supervisor/DashboardIndex';


import DashboardIndexTech from './pages/dashboard/technician/DashboardIndex';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/wallet">
          <WalletIndex />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/menu">
          <MenuIndex/>
        </Route>
        <Route exact path="/profile">
          <ProfileIndex/>
        </Route>
{/*------------------------- admin --------------------------- */}

        <Route exact path="/admin-dashboard">
          <DashboardIndex/>
        </Route>
        <Route exact path="/admin-workorders">
          <WorkordersIndex/>
        </Route>
        <Route exact path="/admin-approval">
          <ApprovalIndex/>
        </Route>
{/*------------------------- super --------------------------- */}

        <Route exact path="/supervisor-dashboard">
          <DashboardIndexSup/>
        </Route>
        <Route exact path="/supervisor-workorders">
          <WorkordersIndex/>
        </Route>
        <Route exact path="/supervisor-approval">
          <ApprovalIndex/>
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
