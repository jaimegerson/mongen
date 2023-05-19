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
import { site, generator } from '../hooks/useData';
import { closeOutline } from 'ionicons/icons';
import CardMore from './CardMore';

const ModalGenerator:React.FC<{
    timestamp: string;
    generator: generator;
    isOpen: boolean;
    setIsOpen: (value: boolean)=>void;
}> = (props) => {
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
                                        <IonCardTitle>{props.generator?.frequency} Hz</IonCardTitle>
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
                                        lbl1: 'UV',
                                        lbl2: 'VW',
                                        lbl3: 'WU',
                                    }}
                                    values={{
                                        val1: props.generator?.voltages?.lines?.UV,
                                        val2: props.generator?.voltages?.lines?.VW,
                                        val3: props.generator?.voltages?.lines?.WU,
                                    }}
                                />
                            </IonCol>
                            <IonCol>
                                    <CardMore 
                                        title = 'Phase voltages'
                                        unite = 'V'
                                        labels={{
                                            lbl1: 'UN',
                                            lbl2: 'VN',
                                            lbl3: 'WN',
                                        }}
                                        values={{
                                            val1: props.generator?.voltages?.phases?.UN,
                                            val2: props.generator?.voltages?.phases?.VN,
                                            val3: props.generator?.voltages?.phases?.WN,
                                        }}
                                    />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                    <CardMore 
                                        title = 'Amparages'
                                        unite = 'A'
                                        labels={{
                                            lbl1: 'U',
                                            lbl2: 'V',
                                            lbl3: 'W',
                                        }}
                                        values={{
                                            val1: props.generator?.amperage?.U,
                                            val2: props.generator?.amperage?.V,
                                            val3: props.generator?.amperage?.W,
                                        }}
                                    />
                            </IonCol>
                            <IonCol>
                                    <CardMore 
                                        title = 'Power factor'
                                        unite = ''
                                        labels={{
                                            lbl1: 'U',
                                            lbl2: 'V',
                                            lbl3: 'W',
                                        }}
                                        values={{
                                            val1: props.generator?.factor?.U,
                                            val2: props.generator?.factor?.V,
                                            val3: props.generator?.factor?.W,
                                        }}
                                    />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                    <CardMore 
                                        title = 'Power'
                                        unite = ''
                                        labels={{
                                            lbl1: 'kW',
                                            lbl2: 'kVA',
                                            lbl3: 'kVAR',
                                        }}
                                        values={{
                                            val1: props.generator?.power?.kw,
                                            val2: props.generator?.power?.kva,
                                            val3: props.generator?.power?.kvar,
                                        }}
                                    />
                            </IonCol>
                            <IonCol>
                            </IonCol>
                        </IonRow>
                </IonContent>
            </IonModal>
    );
}

export default ModalGenerator;