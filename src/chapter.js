export { Chapter };

// create a chapter class
class Chapter {
  constructor(id, pageCount, triggerArray) {
    this.id = id;
    this.pageCount = pageCount;
    this.triggerArray = triggerArray;
    this.name = "chapter".concat(this.id.toString());
    this.elementArray = [];
  }

  addElements() {
    const element = document.createElement('ul');
    // add a class to that element
    element.classList.add(this.name);
    document.body.appendChild(element);
    this.elementArray.push(element);
    // add elements for animation transition
    for (let index = 0; index < this.pageCount; index++) {
      for (let j = 0; j < this.triggerArray[index]; j++) {
        const childElement = document.createElement('li');
        childElement.classList.add(this.name.concat(
        "page", index.toString(), "trigger", j.toString()));
        element.appendChild(childElement);
        this.elementArray.push(childElement);
      }
    }
    // Add end element to handle scene changes
    const endElement = document.createElement('li');
    endElement.classList.add(this.name.concat('end'));
    element.appendChild(endElement);
    this.elementArray.push(endElement);
  }

    // Remove all elements
    // to be used before scene change
  removeElements() {
    for (let index = 0; index < this.elementArray.length; index++) {
      this.elementArray[index].remove();
    }
  }
}