import { LOCALSTORAGE_KEY } from "./constants";

export const loadList = () => {
    console.log("loadList start")
    try {
        const loadedData = localStorage.getItem(LOCALSTORAGE_KEY);
        // console.log("localStorage loadList loadedData array length: ", loadedData);
        if (loadedData === null){

            //return empty array in case nothing is stored in localstorage 
            console.log("localStorage loadList loaded null, returning empty array.")
            return []; 
        }
        return JSON.parse(loadedData);
    } catch (err)
    {   
        // return empty array in case of loading error with localstorage 
        console.error("localStorage loadList error: ", err)
        return [];
    }

}

export const saveList = (list) => {
    console.log("saveList start");
    console.log("list to save: ", list);

    try {
        const serializedList = JSON.stringify(list);
        // console.log("list to serialize: ", serializedList);
        localStorage.setItem(LOCALSTORAGE_KEY, serializedList);

    } catch(err)
    {
        console.log(err); 
    }
}

export const loadMugDetails = (id) => {

    const loadedMugs = loadList();
    console.log("loadMugDetails loadedMugs: ", loadedMugs);
    
    return loadedMugs.find((mug) => mug.id === id);

}