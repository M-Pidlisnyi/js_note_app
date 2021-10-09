import { fieldsOrder } from "../script.js";


export const createNote = (data) => {
    let tr = document.createElement("tr");
 
    let table = document.getElementById("table");
 
    for(let i = 0; i < Object.keys(data).length; i++){
     let td = document.createElement("td");
     let text = document.createTextNode(data[fieldsOrder[i]]);
     td.appendChild(text);
     tr.appendChild(td);
 
    }
 
    table.appendChild(tr);

 }

