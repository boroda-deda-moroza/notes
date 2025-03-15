const notesEl = document.querySelector(".notes");
const addButton = document.querySelector(".add-note");

function createNote(title, text) {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `
  <div class="note-header">
  <h2 class="note__title">${title}</h2>
  <input id="note__title-input" class="hidden" placeholder="${title}"></input>
  <div class="note__actions">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-eraser"></i></button>
  </div>
  </div>
  <div class="note-description">
  <p class="note__description">${text}</p>
  <textarea id="note__description-title" class="hidden" placeholder="${text}"></textarea>
  </div>
  `;
  const editButton = noteEl.querySelector(".edit");
  const deleteButton = noteEl.querySelector(".delete");
  const titleEl = noteEl.querySelector(".note__title");
  const descriptionEl = noteEl.querySelector(".note__description");
  const titleInput = noteEl.querySelector("#note__title-input");
  const textInput = noteEl.querySelector("#note__description-title");

  editButton.addEventListener("click", (e) => {
    titleEl.classList.toggle("hidden");
    descriptionEl.classList.toggle("hidden");

    titleInput.classList.toggle("hidden");
    textInput.classList.toggle("hidden");
  });
  deleteButton.addEventListener("click", (e) => {
    noteEl.remove();
  });
  titleInput.addEventListener("input", (e) => {
    titleEl.innerText = e.target.value;
  });
  textInput.addEventListener("input", (e) => {
    descriptionEl.innerText = e.target.value;
  });
  return noteEl;
}

addButton.addEventListener("click", (e) => {
  const el = createNote("Заголовок", "текст");
  notesEl.appendChild(el);

  notesEl.scrollTop = notesEl.scrollHeight;
});
