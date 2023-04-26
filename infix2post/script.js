function convert() {
    const infix = document.getElementById('infix').value;
    const stack = [];
    const postfix = [];
    let step = 1;
    let stepHtml = '';
    let stackHtml = '';
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3
    };
  
    for (let i = 0; i < infix.length; i++) {
      const char = infix[i];
  
      if (char.match(/[a-z0-9]/i)) {
        postfix.push(char);
        stepHtml += `<div class="step-item">Step ${step++}: Append ${char} to postfix expression.</div>`;
      } else if (char === '(') {
        stack.push(char);
        stackHtml += `<div class="stack-item">(${stack.join(' ')})</div>`;
        stepHtml += `<div class="step-item">Step ${step++}: Push ( onto the stack.</div>`;
      } else if (char === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix.push(stack.pop());
        }
        if (stack.length === 0) {
          throw new Error('Unmatched parentheses.');
        }
        stack.pop();
        stackHtml += `<div class="stack-item">(${stack.join(' ')})</div>`;
        stepHtml += `<div class="step-item">Step ${step++}: Pop operators off the stack and append them to postfix expression until ( is found, then discard (.</div>`;
      } else if (precedence[char]) {
        while (
          stack.length > 0 &&
          stack[stack.length - 1] !== '(' &&
          precedence[char] <= precedence[stack[stack.length - 1]]
        ) {
          postfix.push(stack.pop());
        }
        stack.push(char);
        stackHtml += `<div class="stack-item">(${stack.join(' ')})</div>`;
        stepHtml += `<div class="step-item">Step ${step++}: Pop operators off the stack and append them to postfix expression until an operator with lower precedence is found, then push ${char} onto the stack.</div>`;
      } else {
        throw new Error(`Invalid character: ${char}`);
      }
    }
  
    while (stack.length > 0) {
      if (stack[stack.length - 1] === '(') {
        throw new Error('Unmatched parentheses.');
      }
      postfix.push(stack.pop());
    }
  
    document.getElementById('postfix-container').innerHTML = postfix.join(' ');
    document.getElementById('stack-container').innerHTML = stackHtml;
    document.getElementById('steps-container').innerHTML = stepHtml;
  }
  