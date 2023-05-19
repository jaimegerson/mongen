import { 
    IonAvatar,
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonLabel, 
    IonList, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface user{
    id: number;
    name: string;
    email: string;
}

const Users:React.FC = ()=>{
        const [users, setUsers] = useState([]);
        useEffect(()=>{
            const getUsers = async ()=>{
                const url = 'https://apps.tvcabo.mz/monitoring/generators/api/getUsers';
                const response = await fetch(url);
                const users = await response.json();
                setUsers(users);
            }
            getUsers();
        },[]);

        return (
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/pages/home' />
                        </IonButtons>
                        <IonTitle>Users</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        { users.map((user: any, index)=>(
                        <IonItem key={index}>
                            <IonAvatar slot="start">
                            <img alt="Silhouette of a person's head" src="../logo.png" />
                            </IonAvatar>
                            <IonLabel>
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                            </IonLabel>
                            <IonItemOptions side='start'>
                                <IonItemOption>Delete</IonItemOption>
                            </IonItemOptions>
                        </IonItem>
                        ))}
                    </IonList>
                </IonContent>
            </IonPage>
    );
}
export default Users;