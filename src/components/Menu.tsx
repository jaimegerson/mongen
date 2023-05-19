import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { 
  bookmarkOutline, 
  mailOutline, 
  paperPlaneOutline,  
  hammerSharp,
  nuclear,
  logOutOutline,
  settingsOutline,
  peopleOutline,
  informationCircleOutline,
  alertCircleOutline,
  callOutline,
} from 'ionicons/icons';
import './Menu.css';
import '../theme/global.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Users',
    url: '/page/users',
    iosIcon: peopleOutline,
    mdIcon: peopleOutline
  },
  {
    title: 'Alerts',
    url: '/page/alerts',
    iosIcon: alertCircleOutline,
    mdIcon: alertCircleOutline
  },
  {
    title: 'Settings',
    url: '/page/settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  },
  {
    title: 'Contact',
    url: '/page/contact',
    iosIcon: callOutline,
    mdIcon: callOutline
  },
];

const labels = ['Logout'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <img id='logo_menu' src='../full_logo_v3.png' alt="</> MONGEN"/>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          {labels.map((label, index) => (
            <IonItem routerLink='/' lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
