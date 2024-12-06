import { LOCALSTORAGE_KEY } from "./constants";

export const loadList = () => {
    console.log("loadList start")
    try {
        const loadedData = localStorage.getItem(LOCALSTORAGE_KEY);
        console.log("localStorage loadList loadedData: ", loadedData);
        if (loadedData === null){
            console.log("No loaded data found.")
            return undefined; 
        }
        return JSON.parse(loadedData);
    } catch (err)
    {
        return undefined
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