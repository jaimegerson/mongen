import './SIteCard.css';
import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonText, IonToggle, IonToolbar } from '@ionic/react';
import React from 'react';
import { site } from '../hooks/useData';
import { informationCircle } from 'ionicons/icons';
import Site from '../pages/Site';



const CardSite: React.FC<{
                        device: 'generator' | 'engine' | 'mains' ;
                        site: site;
                        isOpen: boolean;
                        setIsOpen: (value: boolean)=>void;
                    }> = (props)=>{

                        const generatorImage = `storage/app/public/${props.site?.photo}`;
                        const engineImage = 'public/images/engine.png';
                        const mainsImage = 'public/images/EDM.PNG';
    
                    return (
                        <IonCard>
                        <img 
                        id="card-image" 
                        src={`https://apps.tvcabo.mz/monitoring/generators/${props.device === 'engine' ? engineImage : (props.device === 'mains' ? mainsImage : generatorImage)}`}/>
                        <IonCardHeader>
                            <IonCardTitle>{props.device === 'mains' ? 'EDM' : props.site.model}</IonCardTitle>
                            <IonCardSubtitle>
                                {props.site?.location}
                            </IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                        <IonList lines="inset">
                            <IonItem>
                                <IonToggle 
                                    checked={props.site?.gen_status === 'START' ? true : false}
                                    disabled={props.device === 'mains' ? true: false}>
                                    <IonLabel>
                                        <h3>Device status</h3>
                                        <p>
                                            <IonText color={props.site?.gen_status === 'STOP' ? "primary": ""} >Stop</IonText> /
                                            <IonText color={props.site?.gen_status === 'START' ? "primary": ""}> Start</IonText>
                                        </p>
                                    </IonLabel>
                                </IonToggle>
                            </IonItem>
                            <IonItem>
                                 <IonToggle 
                                    checked={props.site?.mode === 'AUTO' ? true : false} 
                                    disabled={props.device === 'mains' ? true: false}>
                                    <IonLabel>
                                        <h3>Operation mode</h3>
                                        <p> 
                                            <IonText color={props.site?.mode === 'MANU' ? "primary": ""}>Maual</IonText> / 
                                            <IonText color={props.site?.mode === 'AUTO' ? "primary": ""}> Auto</IonText>
                                        </p>
                                    </IonLabel>
                                </IonToggle>
                            </IonItem>
                        </IonList>
                        
                        <IonButton
                            className='ion-margin-top' expand="block" onClick={() => props.setIsOpen(true)}>
                            <IonIcon slot='start' icon={informationCircle}/>More
                        </IonButton>
                        </IonCardContent>
                    </IonCard>
                    );
                }

export default CardSite;