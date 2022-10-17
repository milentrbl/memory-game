import startObj from "./start.js"
import gameObj from "./game.js"

const container = document.querySelector('#container')

async function init() {
    container.innerHTML = await startObj.render()
    await startObj.after_render()
}

document.addEventListener('DOMContentLoaded', () => { 
    init()
})

export default container