import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { logIn, logInOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import '../theme/global.css';

const Login:React.FC = ()=>{
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const login = ()=>{
        console.log(user, password);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol id='logo'>
                        <img id='logo_login' src='../full_logo.png' alt="</> MONGEN"/>
                        <h5>
                            The mongen enables you to monitor
                            your genset from anywhere //modification from git
                        </h5>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem >
                                <IonLabel position="floating">Username</IonLabel>
                                <IonInput placeholder="Enter your username" type='text' onIonChange={(event: any) =>setUser(event.detail.value)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput placeholder="Enter your password" type='password' onIonChange={(event: any) =>setPassword(event.detail.value)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    
                    <IonRow>
                        <IonCol>
                        <IonButton href="/pages/home" onClick={login}><IonIcon slot='start'  icon={logInOutline}/>Login</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol>
                            <IonRouterLink routerLink='/pages/home' style={{margin: 'auto'}}>Forgot password?</IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;