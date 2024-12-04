import { API } from "./constants";

export const mugLoader = async ({ params }) => {

    console.log("mugLoader start")
    try {
        const res = await fetch(API.URL + params.id);
        const data = await res.json();
        console.log("mugLoader data: ", data)
        return data;
    } catch (error) {
        console.log("mugLoader error: ", error)
    }

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