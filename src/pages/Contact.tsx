import { 
    IonAvatar,
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import React from 'react';

const Contact:React.FC = ()=>{
        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/pages/home' />
                        </IonButtons>
                        <IonTitle>Contact</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                </IonContent>
            </IonPage>
    );
}
export default Contact;