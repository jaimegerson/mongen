import { 
        IonBadge, 
        IonButton, 
        IonButtons, 
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonCardSubtitle, 
        IonCardTitle, 
        IonCol, 
        IonContent, 
        IonGrid, 
        IonHeader, 
        IonIcon, 
        IonItem, 
        IonLabel, 
        IonList, 
        IonModal, 
        IonRow, 
        IonToolbar } from '@ionic/react';
import React from 'react';
import { mains } from '../hooks/useData';
import { closeOutline } from 'ionicons/icons';
import CardMore from './CardMore';

const ModelMains: React.FC<{
                        timestamp: string;
                        mains: mains;
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
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>{props.mains?.frequency} Hz</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>The data was accurately recorded on {props.timestamp}</p>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <CardMore 
                            title = 'Line voltages'
                            unite = 'V'
                            labels={{
                                lbl1: 'RS',
                                lbl2: 'ST',
                                lbl3: 'TR',
                            }}
                            values={{
                                val1: props.mains?.voltages?.lines?.RS,
                                val2: props.mains?.voltages?.lines?.ST,
                                val3: props.mains?.voltages?.lines?.TR,
                            }}
                        />
                    </IonCol>
                    <IonCol>
                        <CardMore 
                            title = 'Phase voltages'
                            unite = 'V'
                            labels={{
                                lbl1: 'RN',
                                lbl2: 'SN',
                                lbl3: 'TN',
                            }}
                            values={{
                                val1: props.mains?.voltages?.phases?.RN,
                                val2: props.mains?.voltages?.phases?.SN,
                                val3: props.mains?.voltages?.phases?.TN,
                            }}
                        />
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonModal>
    );
}

export default ModelMains;