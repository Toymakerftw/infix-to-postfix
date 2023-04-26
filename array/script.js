let array = [];

function addItem() {
  const input = document.getElementById('array-input');
  const value = input.value;
  if (value) {
    array.push(value);
    input.value = '';
    updateArray();
  }
}

function updateArray() {
  const arrayDiv = document.getElementById('array');
  arrayDiv.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('div');
    item.classList.add('array-item');
    item.innerText = array[i];
    arrayDiv.appendChild(item);
  }
}

function sortArray() {
  array.sort();
  updateArray();
}

function reverseArray() {
  array.reverse();
  updateArray();
}

function shuffleArray() {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  updateArray();
}

function clearArray() {
  array = [];
  updateArray();
}
