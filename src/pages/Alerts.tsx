import { 
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    IonItem,
    IonButton,
    IonIcon,
    IonLabel,
    IonText,
    IonList,
    IonAccordion,
    IonAccordionGroup,
    IonNote
} from '@ionic/react';
import { ellipse, home, star } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';



const Alerts:React.FC = ()=>{
        const [alerts, setAlerts] = useState([]);
        const {formatDate} = useData(); 

        useEffect(()=>{
            const getAlerts =async () => {
                const url = 'https://apps.tvcabo.mz/monitoring/generators/api/getAlerts';
                const response = await fetch(url);
                const alerts = await response.json();
                setAlerts(alerts);
            }
            getAlerts();
        },[]);


        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/pages/home' />
                        </IonButtons>
                        <IonTitle>Alerts</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonAccordionGroup>
                {alerts.map((alert:any, index )=>(
                    
                    <IonAccordion value={alert.created_at} key={index}>
                        <IonItem slot="header" color="light">
                        <IonLabel color={alert.frequency > 45 ? "success": "danger"} >
                           <h3>{formatDate(alert.created_at)}</h3>
                           <IonNote>
                             {alert.device}
                            </IonNote>
                        </IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                                    <IonList>
                                        <IonItem>
                                            <IonLabel><IonNote slot="start">Status</IonNote></IonLabel>
                                            <IonNote slot="end">{alert.frequency > 45 ? 'RECOVERED' : 'CRITICAL'}</IonNote>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonNote slot="start">Location</IonNote></IonLabel>
                                            <IonNote slot="end">{alert.location}</IonNote>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonNote slot="start">Frequency</IonNote></IonLabel>
                                            <IonNote slot="end">{alert.frequency}Hz</IonNote>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel><IonNote slot="start">Alert ID</IonNote></IonLabel>
                                            <IonNote slot="end">{alert.id}</IonNote>
                                        </IonItem>
                                    </IonList>
                        </div>
                    </IonAccordion>
                ))}
                </IonAccordionGroup>



                </IonContent>
            </IonPage>
    );
}
export default Alerts;