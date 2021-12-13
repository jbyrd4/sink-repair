import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type"text" name="serviceBudget" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date Needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>`

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }
        sendRequest(dataToSendToAPI)
    }
})