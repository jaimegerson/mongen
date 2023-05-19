import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

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
import Home from './pages/Home';
import Site from './pages/Site';
import Login from './pages/Login';

import { StatusBar } from '@capacitor/status-bar';
import './theme/global.css';
import { useEffect } from 'react';
import Users from './pages/Users';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import Contact from './pages/Contact';

setupIonicReact();

const App: React.FC = () => {

  useEffect(() => {
    const setStatusBarColor = async () => {
      const toolbarColor = getComputedStyle(document.documentElement).getPropertyValue('--toolbar-color').trim();
      await StatusBar.setBackgroundColor({ color: toolbarColor});
    };
    
    setStatusBarColor();
  }, []);
  
  return (
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>

                <Route exact path="/" component={Login} />
                <IonSplitPane contentId="main">
                  <Menu />
                  <IonRouterOutlet id="main">
                    <Route exact path="/pages/home" component={Home}/>
                    <Route path="/pages/site/:code" component={Site}/>
                    <Route path="/page/users" component={Users} />
                    <Route path="/page/alerts" component={Alerts} />
                    <Route path="/page/settings" component={Settings} />
                    <Route path="/page/contact" component={Contact} />
                  </IonRouterOutlet>
                </IonSplitPane>
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
