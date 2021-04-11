import { createElem } from "./utils";
import { toggleSideNav } from "./eventListener";

export const miniPandA = createElem("div", { id: "miniPandA" });
miniPandA.classList.add("sidenav");
miniPandA.classList.add("cp_tab");

export const hamburger = createElem("div");
hamburger.className = "loader";
hamburger.addEventListener("click", toggleSideNav);

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace KadaiEntryDom {
  export const checkbox = createElem("input", { type: "checkbox", className: "todo-check" });
  export const label = createElem("label");
  export const title = createElem("p", { className: "kadai-title" });
  export const dueDate = createElem("p", { className: "kadai-date" });
  export const remainTime = createElem("span", { className: "time-remain" });
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace DueGroupDom {
  export const header = createElem("div");
  export const headerTitle = createElem("span", { className: "q" });
  export const container = createElem("div", { className: "sidenav-list" });
  export const body = createElem("div");
  export const lectureName = createElem("h2");
}

export { KadaiEntryDom, DueGroupDom };
