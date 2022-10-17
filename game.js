import startObj from "./start.js";
import container from "./script.js";
const gameObj = {
    getPics(count){
        fetch(`https://api.pexels.com/v1/search?query=nature&per_page=${count}`,{
            method: 'GET',
            headers : {
                "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
            }
        })    
        .then(response => response.json())
        .then(resp => container.innerHTML = this.render(resp));
    },
    render(response) {
        console.log(response.photos);   
        return `
            <img src="${response.photos.src}">      
        `
    }
}
export default gameObj