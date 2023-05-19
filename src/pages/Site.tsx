import { 
     IonBackButton,
     IonButtons, 
     IonContent, IonHeader,
     IonImg,
     IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData, { mains } from '../hooks/useData';
import InputControls from '../components/InputControls';
import CardSite from '../components/CardSite';
import { site, generator, engine } from '../hooks/useData';
import ModalGenerator from '../components/ModalGenerator';
import ModalEngine from '../components/ModalEngine';
import ModalMains from '../components/ModelMains';
import { time } from 'ionicons/icons';

const  Site: React.FC = ()=>{
    const {code} = useParams<{code: string;}>();
    
    const [site, setSite] = useState<site>(Object);
    const {getSiteByCode, getSiteDataByCode, formatDate} = useData(); 
    
    const [generator, setGenerator] = useState<generator>(Object); 
    const [mains, setMains] = useState<mains>(Object); 
    const [engine, setEngine] = useState<engine>(Object); 
    const [timestamp, setTimestamp] = useState<string>(''); 
    const [isOpen, setIsOpen] = useState(false);
    
    
    useEffect(()=>{
        const getSite = async () => {
            const site = await getSiteByCode(code);
            setSite(site);
        };
        getSite();
    }, []);
    
    useEffect(()=>{
        const getSiteData = async (siteId: number) => {
            const siteData = await getSiteDataByCode(siteId);
            setMains(JSON.parse(siteData.mains));
            setGenerator(JSON.parse(siteData.generator));
            setEngine(JSON.parse(siteData.engine));
            setTimestamp(formatDate(siteData.created_at));
         }
        getSiteData(site.id);
    },[isOpen]);

    const [device, setDevice] = useState<'generator'| 'engine' | 'mains'>('generator');
    const selectCalcUnitHandler = (value: 'generator'| 'engine' | 'mains')=>{
        setDevice(value);
      };

return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/pages/home' />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <InputControls selectedValue={device} onSelectedValue={selectCalcUnitHandler}/>
                {device === 'generator' ? (
                    <>
                        <CardSite 
                            device= {device}
                            site={site} 
                            isOpen= {isOpen} 
                            setIsOpen={setIsOpen} 
                        />
                        <ModalGenerator
                            timestamp={timestamp}                         
                            generator={generator}
                            isOpen= {isOpen} 
                            setIsOpen={setIsOpen} 
                        />
                    </>
                ): device === 'engine'?(
                  <>
                    <CardSite 
                        device= {device}
                        site={site} 
                        isOpen= {isOpen} 
                        setIsOpen={setIsOpen} 
                    />
                    <ModalEngine
                        timestamp={timestamp}
                        engine={engine}
                        isOpen= {isOpen} 
                        setIsOpen={setIsOpen} 
                    />
                  </>
                    ):(
                        <>
                        <CardSite 
                            device= {device}
                            site={site} 
                            isOpen= {isOpen} 
                            setIsOpen={setIsOpen} 
                            />
                        <ModalMains
                            timestamp={timestamp}
                            mains={mains}
                            isOpen= {isOpen} 
                            setIsOpen={setIsOpen} 
                        />
                      </>
                )}
            </IonContent>
        </IonPage>
    );
}

export default Site;