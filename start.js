import gameObj from "./game.js"
import container from "./script.js"

const startObj = {
    async render() {
        return `
        <div class="start">
            <h1>Start</h1>
            <h2>CHOOSE CATEGORY</h2>
            <form id="category">
                <input type="radio" name="category" id="ocean">
                <label for="ocean">Ocean</label>
                <input type="radio" name="category" id="nature">
                <label for="nature">Nature</label>
            </form>

            <h2>CARD COUNT</h2>
            <div id="count">
                <button id="min">-</button>
                <h2 id="countNumber">4</h2>
                <button id="plus">+</button>
            </div>

            <button id="start">Start</button>
        </div>
        `
    },
    async after_render(){
        const minBtn = document.querySelector('#min')
        const plusBtn = document.querySelector('#plus')
        const countNumber = document.querySelector('#countNumber')
        const startBtn = document.querySelector('#start')
        const oceanBtn = document.querySelector('#ocean')
        const natureBtn = document.querySelector('#nature')
        minBtn.addEventListener('click',()=>{
            if (countNumber.innerText >= 6) {
                countNumber.innerText = Number(countNumber.innerText) - 2;
            }
        })

        plusBtn.addEventListener('click',()=>{
            if (countNumber.innerText >= 4) {
                countNumber.innerText = Number(countNumber.innerText) + 2;
            }
        })
            
        startBtn.addEventListener('click',()=>{
            if(oceanBtn.checked === true || natureBtn.checked === true) {
                gameObj.getPics(countNumber.innerHTML)
            }
        })
    }
}
export default startObj;