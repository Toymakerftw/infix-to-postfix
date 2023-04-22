// Get the input text field
const inputText = document.getElementById("inputText");

// Add event listener for form submission
document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent page from reloading

	// Get the input value from the text field
	const inputValue = inputText.value.trim();

	// Convert the input value to a postfix expression
	const postfix = convertToPostfix(inputValue);

	// Create a new paragraph element to display the postfix expression
	const resultElem = document.createElement("p");

	// Split the postfix expression into characters for animation
	const postfixChars = postfix.split("");

	// Add each character to the result element with animation
	postfixChars.forEach(function(char, index) {
		const charElem = document.createElement("span");
		charElem.textContent = char;
		charElem.style.opacity = 0;
		charElem.style.transition = "opacity 0.5s ease-in-out " + (0.1 * index) + "s";
		resultElem.appendChild(charElem);

		// Trigger the animation by setting the opacity to 1 after a short delay
		setTimeout(function() {
			charElem.style.opacity = 1;
		}, 10);
	});

	// Get the container element and append the result element
	const containerElem = document.querySelector(".container");
	containerElem.appendChild(resultElem);
});

// Function to convert an infix expression to postfix
function convertToPostfix(infix) {
	const stack = [];
	let postfix = "";

	// Define operator precedence
	const precedence = {
		"^": 3,
		"*": 2,
		"/": 2,
		"+": 1,
		"-": 1
	};

	for (let i = 0; i < infix.length; i++) {
		const char = infix[i];

		if (/[a-zA-Z0-9]/.test(char)) {
			// If the character is a letter or number, add it to the postfix expression
			postfix += char;
		} else if (char in precedence) {
			// If the character is an operator, add it to the stack
			while (stack.length > 0 && stack[stack.length - 1] !== "(" && precedence[char] <= precedence[stack[stack.length - 1]]) {
				postfix += stack.pop();
			}
			stack.push(char);
		} else if (char === "(") {
			// If the character is an opening parenthesis, add it to the stack
			stack.push(char);
		} else if (char === ")") {
			// If the character is a closing parenthesis, pop operators from the stack and add them to the postfix expression until an opening parenthesis is found
			while (stack.length > 0 && stack[stack.length - 1] !== "(") {
				postfix += stack.pop();
			}
			if (stack[stack.length - 1] === "(") {
				stack.pop();
			}
		}
	}

	// Pop any remaining operators from the stack and add them to the postfix expression
	while (stack.length > 0) {
		if (stack[stack.length - 1] !== "(" && stack[stack.length - 1] !== ")") {
			postfix += stack.pop();
		} else {
			stack.pop();
		}
	}

	return postfix;
}
