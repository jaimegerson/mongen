import { 
    IonBadge, 
    IonButton, 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonModal, 
    IonToolbar } from '@ionic/react';
import React from 'react';
import { engine } from '../hooks/useData';
import { closeOutline } from 'ionicons/icons';

const ModalEngine: React.FC<{
                    timestamp: string;
                    engine: engine;
                    isOpen: boolean;
                    setIsOpen: (value: boolean)=>void
                }> = (props)=>{
return (
    <IonModal isOpen={props.isOpen}>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="end">
            <IonButton onClick={() => props.setIsOpen(false)}>
                <IonIcon icon={closeOutline}/>
            </IonButton>
        </IonButtons>
        </IonToolbar>
    </IonHeader>
        <IonContent>
            <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>Engine parameters</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Dinamo Tension</IonLabel>
                        <IonBadge color="danger">{props.engine?.batteries?.DT} V</IonBadge>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Battery Voltage</IonLabel>
                        <IonBadge color="success">{props.engine?.batteries?.BV} V</IonBadge>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Fuel Level</IonLabel>
                        <IonBadge color="danger">{props.engine?.fuel} %</IonBadge>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Oil Pressure</IonLabel>
                        <IonBadge color="success">{props.engine?.pressure} bar</IonBadge>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Engine Speed</IonLabel>
                        <IonBadge color="primary">{props.engine?.speed} rpm</IonBadge>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Temperature</IonLabel>
                        <IonBadge color="success">{props.engine?.temperature} °C</IonBadge>
                    </IonItem>
                </IonList>
            </IonCardContent>
            </IonCard>
        </IonContent>
    </IonModal>
);
}
export default ModalEngine;