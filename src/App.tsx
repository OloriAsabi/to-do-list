import { Redirect } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { 
  BrowserRouter as Router,
 Switch as Routes,
  Route
} from 'react-router-dom';
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

/* Theme variables */
import './theme/variables.css';
import React from 'react';


const App: React.FC = () => (
  <IonApp>
    <Router>
      <Home />
      <Routes>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
      </Routes>
    </Router>
  </IonApp>
);

export default App;
