import { Scientist } from "../types";
import { createElement } from "./utility";

const renderScientists = (state: Scientist[], container: string) => {
  const section = document.getElementById(container) as HTMLElement;
  section.innerHTML = "";

  state.forEach((object) => {
    const scientist = createElement("article", {
      class: "scientist",
      id: object.name.replace(" ", "-"),
    });
    section.appendChild(scientist);

    const table = createElement("table", { class: "scientist-table" });
    scientist.appendChild(table);

    const titleAndName = createElement("caption", {
      class: "name",
      textContent: object.title + " " + object.name,
    });
    table.appendChild(titleAndName);

    const addRow = (label: string, value: string | number) => {
      const tr = createElement("tr");
      table.appendChild(tr);
      const th = createElement("th", { scope: "row" }, label);
      const td = createElement("td", {}, value.toString());
      tr.append(th, td);
    };
    Object.entries(object).forEach(([key, value]) => {
      if (key !== object.title || key !== object.name) {
        addRow(key, value);
      }
    });
  });
};
export default renderScientists;
