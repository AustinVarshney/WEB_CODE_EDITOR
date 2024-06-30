let mainPart = document.getElementById("mainTestWeb");
let saveButton = document.getElementById("confirmChangeTestWeb");
let style = document.querySelector("style");
let script = document.getElementById("scriptTagTestWeb");

// Function to attach event listeners based on the provided JavaScript code
function attachEventListeners() {
    // Retrieve the user-provided JavaScript code
    let userScript = inp3TestWeb.value;

    // Create a function from the user script
    let userFunction = new Function(userScript);

    // Execute the user script
    userFunction();
}


// Save button click event listener
saveButton.addEventListener("click", function() {
    // Clear previous content
    mainPart.innerHTML = '';
    
    // Create and append HTML content
    let htmlContent = document.createElement("div");
    htmlContent.innerHTML = inp1TestWeb.value;
    mainPart.append(htmlContent);

    // Apply CSS content
    style.innerText = inp2TestWeb.value;

    // Apply JavaScript content and attach event listeners
    // script.innerText = inp3TestWeb.value;
    // attachEventListeners();
});

// Initialize MutationObserver to automatically attach event listeners to newly added elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            attachEventListeners();
        }
    });
});

observer.observe(mainPart, { childList: true, subtree: true });