import startObj from "./start.js";
import container from "./script.js";
const gameObj = {
    getPics(count){
        fetch(`https://api.pexels.com/v1/search?&query=nature&per_page=${count/2}`, {
            headers: {
                Authorization: '563492ad6f91700001000001f69872998c554defa4c68b7665ec914c'
            }
        })
        .then(response => response.json())
        .then(resp => container.innerHTML = this.render(resp));
    },
    render(response) {
        let imgs = "";
        for (let i = 0; i < response.photos.length; i++) {
            imgs += `<img src="response.photos[i].src.small" >`
        }
        console.log(imgs);

        return `
            <div class="img-container">
                ${imgs}
            </div>
        `
    }
}
export default gameObj