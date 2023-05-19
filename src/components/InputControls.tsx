import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const  InputControls: React.FC<{
    selectedValue: 'generator'| 'engine' | 'mains';
    onSelectedValue: (value: 'generator'| 'engine' | 'mains')=> void;
}> = (props) => {

    const inputChangeHandler = (event: CustomEvent)=>{ // The IonSegment throws a CustomEvent Object, which contains the selected value
        props.onSelectedValue(event.detail.value);
    };
    return (
        <IonSegment 
            value={props.selectedValue} 
            onIonChange={inputChangeHandler}>
            <IonSegmentButton value='generator'>
                <IonLabel>generator</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='engine'>
                <IonLabel>engine</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='mains'>
                <IonLabel>mains</IonLabel>
            </IonSegmentButton>
        </IonSegment>    
    );
}

export default InputControls;