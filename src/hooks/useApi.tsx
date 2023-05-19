export enum SearchType {
    all = 'all',
    code = 'code',
    model = 'model',
    location = 'location'
}

export interface DetailsResult {
    Code: string
    Model: string
    Location: string
    Photo: string
    Mode: string
    GenStatus: string
    TestStatus: string 
}

export const useApi = ()=>{
    let url = 'https://apps.tvcabo.mz/monitoring/generators/api/getSite';
    const searchData = async (type:  SearchType, value: string)=>{
        const response = await fetch(`${url}?search_type=${type}&search_value=${value}`);
        const jsonData =  await response.json();
        return jsonData ;
    }

    return {searchData}
}
