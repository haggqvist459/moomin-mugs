
// use later to supply different components with mug data 

const mugLoader = async ({ params }) => {

    try {
        const res = await fetch(``);
    } catch (error) {
        console.log("mugLoader error: ", error)
    }

    try {
        const data = await res.json();
    } catch (error) {
        console.log("mugLoader JSON error: ", error)
    }
    
    
    return data;
}