import {createNote} from "./modules/createNote.js";

export const fieldsOrder = {
    0: "name",
    1: "created",
    2: "category",
    3: "content",
    4: "date",
    5: "actions"
};


export const dataReciever = () =>{
    const inputs = document.querySelectorAll("input");

    _name = inputs.name.value;
}

export const test_data = {
    name: "name",
    created: "date",
    category: "category",
    content: "content",
    date: "dates",
    actions: "actions"
};

const createNoteButton = document.querySelector(".createNote");
createNoteButton.addEventListener("click", () => createNote(test_data));





