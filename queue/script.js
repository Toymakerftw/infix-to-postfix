let lifoQueue = [];
let fifoQueue = [];

function enqueue() {
  const input = document.getElementById('queue-input');
  const value = input.value.trim();
  if (value !== '') {
    lifoQueue.push(value);
    fifoQueue.unshift(value);
    input.value = '';
    updateQueue();
  }
}

function updateQueue() {
  const lifoQueueDiv = document.getElementById('lifo-queue');
  const fifoQueueDiv = document.getElementById('fifo-queue');
  lifoQueueDiv.innerHTML = '';
  fifoQueueDiv.innerHTML = '';
  if (lifoQueue.length > 0) {
    for (let i = 0; i < lifoQueue.length; i++) {
      const item = document.createElement('div');
      item.classList.add('queue-item');
      item.innerText = lifoQueue[i];
      lifoQueueDiv.appendChild(item);
    }
    lifoQueueDiv.parentElement.style.display = 'block';
  } else {
    lifoQueueDiv.parentElement.style.display = 'none';
  }
  if (fifoQueue.length > 0) {
    for (let i = 0; i < fifoQueue.length; i++) {
      const item = document.createElement('div');
      item.classList.add('queue-item');
      item.innerText = fifoQueue[i];
      fifoQueueDiv.appendChild(item);
    }
    fifoQueueDiv.parentElement.style.display = 'block';
  } else {
    fifoQueueDiv.parentElement.style.display = 'none';
  }
}

function dequeueLifo() {
  if (lifoQueue.length > 0) {
    lifoQueue.pop();
    fifoQueue.shift();
    updateQueue();
  }
}

function dequeueFifo() {
  if (fifoQueue.length > 0) {
    lifoQueue.shift();
    fifoQueue.shift();
    updateQueue();
  }
}

function clearQueue() {
  lifoQueue = [];
  fifoQueue = [];
  updateQueue();
}
