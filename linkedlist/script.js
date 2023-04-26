// Define linked list node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add node to end of linked list
    append(value) {
      let newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next !== null) {
          current = current.next;
        }
  
        current.next = newNode;
      }
  
      this.renderList();
    }
  
    // Insert node at given position
    insert(position, value) {
      if (position === 0) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let index = 0;
  
        while (current !== null && index < position - 1) {
          current = current.next;
          index++;
        }
  
        if (current === null) {
          console.error(`Position ${position} is out of bounds.`);
          return;
        }
  
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
      }
  
      this.renderList();
    }
  
    // Delete node at given position
    delete(position) {
      if (this.head === null) {
        console.error('List is empty.');
        return;
      }
  
      if (position === 0) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let index = 0;
  
        while (current !== null && index < position - 1) {
          current = current.next;
          index++;
        }
  
        if (current === null || current.next === null) {
          console.error(`Position ${position} is out of bounds.`);
          return;
        }
  
        current.next = current.next.next;
      }
  
      this.renderList();
    }
  
    // Render linked list on webpage
    renderList() {
      let listDiv = document.getElementById('list');
      listDiv.innerHTML = '';
  
      let current = this.head;
  
      while (current !== null) {
        let nodeDiv = document.createElement('div');
        nodeDiv.classList.add('node');
        nodeDiv.textContent = current.value;
        listDiv.appendChild(nodeDiv);
        current = current.next;
      }
    }
  }
  
  // Initialize linked list
  let linkedList = new LinkedList();
  
  // Define functions for button clicks
  function createNode() {
    let valueInput = document.getElementById('value');
    linkedList.append(valueInput.value);
    valueInput.value = '';
  }
  
  function insertNode() {
    let positionInput = document.getElementById('position');
    let valueInput = document.getElementsByName('value')[1];
    linkedList.insert(parseInt(positionInput.value), valueInput.value);
    positionInput.value = '';
    valueInput.value = '';
  }
  
  function deleteNode() {
    let positionInput = document.getElementById('position');
    linkedList.delete(parseInt(positionInput.value));
    positionInput.value = '';
  }
  