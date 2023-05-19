import { 
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import React from 'react';

const Settings:React.FC = ()=>{
        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/pages/home' />
                        </IonButtons>
                        <IonTitle>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                </IonContent>
            </IonPage>
    );
}
export default Settings;