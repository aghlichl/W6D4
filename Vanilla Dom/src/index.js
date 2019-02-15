const DomNodeCollection = require("./dom_node_collection.js")

function $l(selector) {
  if (typeof selector === "string"){
    let selected = document.querySelectorAll(`${selector}`);
    let selected_array = Array.from(selected);
    return new DomNodeCollection(selected_array);
  } else if (selector instanceof HTMLElement){
    let selected_array = Array.from(selector);
    return new DomNodeCollection(selected_array);
  }
}

window.$l = $l;
