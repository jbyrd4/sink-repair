import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => {
        mainContainer.innerHTML = SinkRepair()
    })
}

render()

mainContainer.addEventListener("stateChanged", CustomEvent => render())