import { fieldsOrder } from "../script.js";

let modal = document.querySelector("#modalForm");

export const openModal = () =>   modal.style.display = "block";

export const createNote = (data) => {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
 
    for(let i = 0; i < Object.keys(data).length; i++){
        let td = document.createElement("td");
        let text = document.createTextNode(data[fieldsOrder[i]]);
        td.appendChild(text);
        tr.appendChild(td);
    }
 
    table.appendChild(tr);

 }

export const closeModal = () => modal.style.display = "none";
