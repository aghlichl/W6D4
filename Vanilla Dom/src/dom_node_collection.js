const nodes = require("./index.js")

class DomNodeCollection{
  constructor(nodeListArray){
    this.nodeListArray = nodeListArray;
  }
  
  html(string){
    if(!string.length){
      return this.nodeListArray[0].innerHTML
    }
    else{
      for (let i = 0; i < this.nodeListArray.length; i++) {
        let el = this.nodeListArray[i];
        el.innerHTML = string;
      }
    } 
  }

  empty(){
    for (let i = 0; i < this.nodeListArray.length; i++) {
      let el = this.nodeListArray[i];
      el.innerHTML = "";
    }

  }

  append(element){
    if (element instanceof HTMLElement){
      for (let i = 0; i < this.nodeListArray.length; i++) {
        let el = this.nodeListArray[i];
        el.innerHTML += `${element}`;
      }
    } else if (typeof element === "string") {
      for (let i = 0; i < this.nodeListArray.length; i++) {
        let el = this.nodeListArray[i];
        el.innerHTML += element;
      }
    } else if (element instanceof DomNodeCollection) {
      for (let i = 0; i < this.nodeListArray.length; i++) {
        let outerEl = this.nodeListArray[i];
        for (let j = 0; j < element.nodeListArray.length; j++) {
          let el = element.nodeListArray[j].innerHTML;
          outerEl.innerHTML += el;
        }
      }
    }
  }

  remove(){
    for (let i = 0; i < this.nodeListArray.length; i++) {
      this.nodeListArray[i].parentNode.removeChild(this.nodeListArray[i]);
    } 
  }

  // attr(){
  //   let attrs = [];
  //   for (let i = 0; i < this.nodeListArray.length; i++) {
  //     attrs.push(this.nodeListArray[i].attributes);
  //   }
  //   return attrs;
  // }

  addClass(clas){
    for (let i = 0; i < this.nodeListArray.length; i++) {
      let el = this.nodeListArray[i];
      el.className += ` ${clas}`;
    }
  }

  removeClass(){
    for (let i = 0; i < this.nodeListArray.length; i++) {
      let el = this.nodeListArray[i];
      el.className = "";
    }
  }
  


  find(selector){
    let children = this.children();
    if (typeof selector === "string") {
      let selected = document.querySelectorAll(`${selector}`);
      let selected_array = Array.from(selected);
      return selected_array;
    } else if (selector instanceof HTMLElement) {
      let selected_array = Array.from(selector);
      return selected_array;
    }
  }

  children(){
    let children = [];

    for (let i = 0; i < this.nodeListArray.length; i++) {
      let el = this.nodeListArray[i];
      children.push(el.children);
    }

    return children;
  }

 parent(){
    let parent = [];

    for (let i = 0; i < this.nodeListArray.length; i++) {
      let el = this.nodeListArray[i];
      parent.push(el.parentNode);
    }

    return parent;
  } 

}

module.exports = DomNodeCollection;