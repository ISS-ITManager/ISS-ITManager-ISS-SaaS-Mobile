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
import DashboardIndex from './pages/fm/dashboard/DashboardIndex';
import DashboardMain from './pages/main/DashboardMain';
import ProfileIndex from './pages/profile/ProfileIndex';
import WorkordersIndex from './pages/fm/workorders/WorkordersIndex';
import WorkordersIndexAsignee from './pages/fm/workorders/WorkordersIndexAsignee';
import ApprovalIndex from './pages/fm/approval/ApprovalIndex';

import DashboardIndexSup from './pages/fm/dashboard/requestor/DashboardIndex';


import DashboardIndexTech from './pages/fm/dashboard/asignee/DashboardIndex';

{/*------------------------- ITSM --------------------------- */}
import ITSMFAQS from './pages/itsm/faqs/FAQS';
import ITSMDashboardIndex from './pages/itsm/dashboard/DashboardIndex';
import ITSMHistory_Request from './pages/itsm/incident_request_history/Incident_Request_History';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/">
          <DashboardMain />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/wallet">
          <WalletIndex />
        </Route>
        {/* <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}
        <Route exact path="/menu">
          <MenuIndex />
        </Route>
        <Route exact path="/profile">
          <ProfileIndex />
        </Route>

        {/*------------------------- main --------------------------- */}
        <Route exact path="/main-dashboard">
          <DashboardMain />
        </Route>


        {/*------------------------- fm --------------------------- */}
        <Route exact path="/fm" >
          {localStorage.getItem("userRole") === "Admin"? <DashboardIndex /> : localStorage.getItem("userRole") === "Requestor" ?  <DashboardIndexSup /> :<DashboardIndexTech /> }
        </Route>

        {/*------------------------- admin --------------------------- */}

        <Route exact path="/fm/admin-dashboard">
          <DashboardIndex />
        </Route>
        <Route exact path="/fm/admin-workorders">
          <WorkordersIndex />
        </Route>
        <Route exact path="/fm/admin-approval">
          <ApprovalIndex />
        </Route>
        {/*------------------------- requestor --------------------------- */}

        <Route exact path="/fm/requestor-dashboard">
          <DashboardIndexSup />
        </Route>
        <Route exact path="/fm/requestor-workorders">
          <WorkordersIndex />
        </Route>
        <Route exact path="/fm/requestor-approval">
          <ApprovalIndex />
        </Route>

        {/*------------------------- tech --------------------------- */}

        <Route exact path="/fm/asignee-dashboard">
          <DashboardIndexTech />
        </Route>
        <Route exact path="/fm/asignee-workorders">
          <WorkordersIndexAsignee />
        </Route>
        <Route exact path="/fm/supervisor-approval">
          <ApprovalIndex />
        </Route>

        {/*------------------------- ITSM --------------------------- */}

        <Route exact path="/itsm/faqs">
          <ITSMFAQS />
        </Route>
        <Route exact path="/itsm/dashboard">
          <ITSMDashboardIndex />
        </Route>
        <Route exact path="/itsm/incident&request">
          <ITSMHistory_Request />
        </Route>

      

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
