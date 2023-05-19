import { 
    IonButtons, 
    IonContent, 
    IonHeader,
    IonIcon,
    IonImg,
    IonItem, 
    IonItemOption,
    IonItemOptions, 
    IonItemSliding, 
    IonLabel, 
    IonList, 
    IonMenuButton, 
    IonNote, 
    IonPage, 
    IonSearchbar, 
    IonSelect, 
    IonSelectOption, 
    IonText, 
    IonThumbnail, 
    IonTitle, 
    IonToolbar } from '@ionic/react';
import useData from '../hooks/useData';
import { SearchType, useApi } from '../hooks/useApi';
import { useEffect, useState } from 'react';
import { ellipse } from 'ionicons/icons';

const Home: React.FC = ()=>{
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState<SearchType>(SearchType.all);
    const [result, setResult] = useState([]);
    const {sites} = useData();
    const {searchData} = useApi();


   useEffect(()=>{
        setResult(sites);
   },[sites]);
   

   useEffect(()=>{
    const search = async()=>{
        if(!searchType){
            setResult(sites);
            return;
        }
       const result = await searchData(searchType, searchValue);
       setResult(result)
    }
    search();
   },[searchValue,searchType]);
   
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding-top'>
                    <IonSearchbar 
                        value={searchValue}
                        onIonChange={(e) => setSearchValue(e.detail.value!)}>
                    </IonSearchbar>
                    <IonItem>
                        <IonSelect label='Select search type' value={searchType} onIonChange={(e)=> setSearchType(e.detail.value)}>
                            <IonSelectOption value="">All</IonSelectOption>
                            <IonSelectOption value="code">Code</IonSelectOption>
                            <IonSelectOption value="model">Model</IonSelectOption>
                            <IonSelectOption value="location">Location</IonSelectOption>
                        </IonSelect>
                    </IonItem>

              <IonList>
                    {result.map((site: any, index)=>(
                        <IonItemSliding key={site.code}>
                            <IonItem href={`/pages/site/${site.code}`}>
                                <IonThumbnail slot='start'>
                                    <img src={`https://apps.tvcabo.mz/monitoring/generators/storage/app/public/${site?.photo}`}/>
                                </IonThumbnail>
                                <IonLabel className='ion-padding'>
                                    <h2>{site?.model}</h2>
                                    <IonNote>{site?.location}</IonNote>
                                </IonLabel>
                                <IonIcon 
                                    size='small' 
                                    slot='end' color={site?.gen_status === 'START' ? "success": ""} 
                                    icon={ellipse}/>
                            </IonItem>
                            <IonItemOptions side='end'>
                                <IonItemOption >Edit</IonItemOption>
                            </IonItemOptions>
                            <IonItemOptions side='start'>
                                <IonItemOption color='danger'>Delete</IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonContent>

        </IonPage>
    );
}

export default Home;