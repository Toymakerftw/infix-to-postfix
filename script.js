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
	resultElem.textContent = postfix;

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
