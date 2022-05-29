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

  getFirstTrigger() {
    return this.name;
  }

  getTrigger(pageNumber, triggerIndex) {
    return this.name.concat(
    "page", pageNumber.toString(),
    "trigger", triggerIndex.toString());
  }

  getEndTrigger() {
    return this.name.concat('end');
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
        childElement.classList.add(this.getTrigger(index, j));
        element.appendChild(childElement);
        this.elementArray.push(childElement);
      }
    }
    // Add end element to handle scene changes
    const endElement = document.createElement('li');
    endElement.classList.add(this.getEndTrigger());
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