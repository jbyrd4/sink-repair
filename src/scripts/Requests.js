import { deleteRequest, getRequests } from "./dataAccess.js";

export const Requests = () => {
    const requests = getRequests()
      let html = '<ul class="list">'
      const requestListItems = requests.map((request) => {
      return `<li class="listItem">
      <div>${request.description}</div>
      <button class="request__delete" id="request--${request.id}">Delete</button>
      </li><br>`
      })
      
      html += requestListItems.join("")
      html += `</ul>`
      return html
      
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})