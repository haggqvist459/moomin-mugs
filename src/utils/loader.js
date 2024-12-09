import { API } from "./constants";
import { loadList } from "./localStorage";

export const mugLoader = async ({ params }) => {

    const loadedMugs = loadList();
    console.log("mugLoader loadedMugs: ", loadedMugs);
    
    const loadedMug = loadedMugs.find((mug) => mug.id === params.id);
    console.log("mugLoader loadedMug: ", loadedMug);
    return loadedMugs.find((mug) => mug.id === params.id);

    // console.log("mugLoader start")
    // try {
    //     const res = await fetch(API.URL + params.id);
    //     const data = await res.json();
    //     console.log("mugLoader data: ", data)
    //     return data;
    // } catch (error) {
    //     console.log("mugLoader error: ", error)
    // }

}

export const loadAllMugs = async () => {
    
    try {
        const res = await fetch(API.URL);
        const data = await res.json();
        console.log("loadAllMugs data: ", data);
        return data;
    } catch (error) {
        console.log("Error loading all mugs: ", error)
    }

}