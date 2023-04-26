let stack = [];
stack.length = 0;

function push() {
  const input = document.getElementById('stack-input');
  const value = input.value;
  if (value) {
    stack.push(value);
    input.value = '';
    updateStack();
  }
}

function pop() {
  stack.pop();
  updateStack();
}

function updateStack() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHTML = '';
    for (let i = stack.length - 1; i >= 0; i--) {
      const item = document.createElement('div');
      item.classList.add('stack-item');
      item.innerText = stack[i];
      stackDiv.appendChild(item);
    }
    if (stack.length === 0) {
      stackDiv.style.display = 'none';
    } else {
      stackDiv.style.display = 'flex';
    }
  }
  