import {createNote, closeModal, openModal} from "./modules/createNote.js";

export const fieldsOrder = {
    0: "name",
    1: "created",
    2: "category",
    3: "content",
    4: "date",
    5: "actions"
};


export const test_data = {
    name: "name",
    created: "date",
    category: "category",
    content: "content",
    date: "dates",
    actions: "actions"
};




const openModalButton = document.querySelector(".openModal");
openModalButton.addEventListener("click", () => openModal());

const closeModalButton = document.querySelector(".closeModal");
closeModalButton.addEventListener("click", () => closeModal());

const saveNoteButton = document.querySelector(".saveNote");
saveNoteButton.addEventListener("click", () => {
    createNote(test_data);
    closeModal();
});









