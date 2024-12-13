import './style.css'
import { createElement } from "./funcs/utility";
import { scientistTitles, fieldsOfExpertise } from "./datastorage";
import { Scientist, State } from "./types";
import renderScientists from "./funcs/renderer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Evil Scientist DB</h1>
    <p class="read-the-docs">
      Moahahahaha
    </p>
  </div>
`;

const app = document.querySelector("#app") as HTMLDivElement;

// =====================FORM=====================
// Form-container
const form = createElement("section", { id: "form-container" });
app.appendChild(form);

//Form - Title
const titleLabel = createElement("label", {
  htmlFor: "title-select",
  textContent: "Title",
});
form.appendChild(titleLabel);

const titleSelect = createElement("select", { id: "title-select" });
form.appendChild(titleSelect);

// Dynamically creates title options
scientistTitles.forEach((element) => {
  const titleOption = createElement("option", { value: element }, element);
  titleSelect.appendChild(titleOption);
});

// Form - Name
const nameLabel = createElement("label", {
  id: "name-label",
  htmlFor: "name-input",
  textContent: "Name: ",
});
form.appendChild(nameLabel);

const nameInput = createElement("input", { id: "name-input", type: "text" });
form.appendChild(nameInput);

// Form - Age
const ageLabel = createElement("label", {
  id: "age-label",
  htmlFor: "age-input",
  textContent: "Age: ",
});
form.appendChild(ageLabel);

const ageInput = createElement("input", { id: "age-input", type: "number" });
form.appendChild(ageInput);

// Form - Field of expertise (foe)
const foeFieldset = createElement("fieldset");
form.appendChild(foeFieldset);

const foeLegend = createElement("legend", {
  textContent: "Field of expertise: ",
});
foeFieldset.appendChild(foeLegend);

fieldsOfExpertise.forEach((element) => {
  const foeInput = createElement("input", {
    type: "radio",
    id: element,
    name: "expertise",
    value: element,
    innerHTML: element,
  });
  const foeLabel = createElement("label", {
    htmlFor: element,
    textContent: element,
  });
  foeFieldset.append(foeLabel, foeInput);
});

// Form - Number of henchmen
const henchmenLabel = createElement("label", {
  id: "henchmen-label",
  htmlFor: "henchmen-input",
  textContent: "Number of henchmen: ",
});
const henchmenInput = createElement("input", {
  id: "henchmen-input",
  type: "number",
});
form.append(henchmenLabel, henchmenInput);

// Form - Short description
const descrLabel = createElement("label", {
  id: "descr-label",
  htmlFor: "descr-textarea",
  textContent: "A short description: ",
});
form.appendChild(descrLabel);

const descrTextarea = createElement("textarea", {
  id: "descr-textarea",
  name: "description",
});
form.appendChild(descrTextarea);

// Form - Add button
const addButton = createElement("input", {
  id: "add-scientist-button",
  type: "button",
  value: "ADD",
});
form.appendChild(addButton);

// ==============================================

// ==================COLLECTION==================

const scientistCollection = createElement("section", { id: "collection" });
app.appendChild(scientistCollection);

// ==============================================

addButton.addEventListener("click", () => {
  const newScientist: Scientist = {
    title: (document.getElementById("title-select") as HTMLSelectElement).value,
    name: (document.getElementById("name-input") as HTMLInputElement).value,
    age: parseInt(
      (document.getElementById("age-input") as HTMLInputElement).value
    ),
    fieldOfExpertise: (
      document.querySelector(
        "input[name='expertise']:checked"
      ) as HTMLInputElement
    ).value,
    numberOfHenchmen: parseInt(
      (document.getElementById("henchmen-input") as HTMLInputElement).value
    ),
    description: (
      document.getElementById("descr-textarea") as HTMLTextAreaElement
    ).value,
  };
  currentState.collection.push(newScientist);
  renderScientists(currentState.collection, "collection");
  console.log(currentState);
});

// ==============STATE==============
const currentState: State = {
  collection: [
    {
      title: "Dr.",
      name: "Greg",
      age: 32,
      fieldOfExpertise: "Chemistry",
      numberOfHenchmen: 7,
      description: "A short guy.",
    },
  ],
};

renderScientists(currentState.collection, "collection");