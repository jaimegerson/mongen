import { 
    IonBadge, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 

    IonItem, 
    IonLabel, 
    IonList,
    IonToolbar, 
} from '@ionic/react';
import React from 'react';

const CardMore: React.FC<{
    title: string;
    unite: string;
    labels: {
        lbl1: string;
        lbl2: string;
        lbl3: string;
    };
    values: {
        val1: number;
        val2: number;
        val3: number;
    }
}> = (props)=>{

    return (<IonCard>
        <IonCardHeader>
            <IonToolbar>
                <IonCardSubtitle>{props?.title}</IonCardSubtitle>
            </IonToolbar>
        </IonCardHeader>

        <IonCardContent>
            <IonList>
                <IonItem>
                    <IonLabel>{props.labels?.lbl1}</IonLabel>
                    <IonBadge color="danger">{props.values?.val1} {props.unite}</IonBadge>
                </IonItem> 

                <IonItem>
                    <IonLabel>{props.labels?.lbl2}</IonLabel>
                    <IonBadge color="success">{props.values?.val2} {props.unite}</IonBadge>
                </IonItem>

                <IonItem>
                    <IonLabel>{props.labels?.lbl3}</IonLabel>
                    <IonBadge color="primary">{props.values?.val3} {props.unite}</IonBadge>
                </IonItem> 
            </IonList>
        </IonCardContent>
        </IonCard>
    );
}

export default CardMore;