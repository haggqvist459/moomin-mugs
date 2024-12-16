
export const convertImageToString = (file) => {
    // convert selected image to a base64 URl string 

    console.log("convertImagetoString start");
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            // console.log("fileReader result: ", fileReader.result)
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    })
}