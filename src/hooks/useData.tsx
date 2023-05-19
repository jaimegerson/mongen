import { useEffect, useState } from "react";

export interface site {
    id: number,
    model: string, 
    location: string, 
    gen_status: string,
    mode: string,
    photo: string,
}

export interface generator {
    voltages: {
        lines: {
            UV: number,
            VW: number,
            WU: number,
        },
        phases: {
            UN: number,
            VN: number,
            WN: number,
        }
    },
    amperage: {
            U: number
            V: number
            W: number
    },
    factor: {
            U: number,
            V: number,
            W: number,
    },
    power: {
            kw: number,
            kva: number,
            kvar: number,
    },
    frequency : number,
    consumed_power: number,
}

export interface mains {
    voltages: {
        lines: {
            RS: number,
            ST: number,
            TR: number,
        },
        phases: {
            RN: number,
            SN: number,
            TN: number,
        }
    },
    frequency: number,
}

export interface engine {
    batteries: { 
        DT: number, 
        BV: number,
    },
    fuel: number,
    pressure: number,
    speed: number,
    temperature: number,
    working_hours: number,
}

function useData(){
    const [sites, setSites] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const url = 'https://apps.tvcabo.mz/monitoring/generators/api/sites';
            const data =  await fetch(url);
            const json =  await data.json();
            setSites(json);
        }
        getData();
    }, []);

    const getSiteByCode = async (code: string) => {
        const url = 'https://apps.tvcabo.mz/monitoring/generators/api/sites';
        const data =  await fetch(url);
        const json =  await data.json();
        const site =  await json.filter((item: any) => item.code === code);
        return site[0];
    }

    const getSiteDataByCode =async (code: number) => {
        const url = 'https://apps.tvcabo.mz/monitoring/generators/api/getSiteData';
        const data =  await fetch(`${url}?search_value=${code}`);
        const json =  await data.json();
        return json[0];
    }

    // const getSiteByCode = async (code: string) => {
    //     const url = `https://apps.tvcabo.mz/monitoring/generators/api/data/${code}`;
    //     const data =  await fetch(url);
    //     const json =  await data.json();
    //     const site =  await json.filter((item: any) => item.code === code);
    //     return site[0];
    // }

    
    const formatDate = (timestamp: string)=>{
        const date = new Date(timestamp);
        const formattedDateTime = date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        });
        return formattedDateTime;
    }



    return {sites, getSiteByCode, getSiteDataByCode, formatDate}
}
export default useData;