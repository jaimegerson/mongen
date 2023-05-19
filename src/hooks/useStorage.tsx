import { Storage } from "@ionic/storage";
import { useEffect, useState } from "react";

const TODOS_KEY = 'my-todos';

export interface TodoItem {
    task: string;
    created: number;
    status: number;
    id: string;
}

export function useStorage(){
    const [store, setStore] = useState<Storage>();

    useEffect(()=>{
        const initStorage =async () => {
           const newStore = new Storage({
            name: 'mongendb'
           });
           const store = await newStore.create();
           setStore(store);

           
        }
        initStorage();
    },[]);
}