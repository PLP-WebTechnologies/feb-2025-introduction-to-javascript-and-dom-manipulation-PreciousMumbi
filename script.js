 // Change text content dynamically
function changeText() {
    document.getElementById('intro').textContent = "The text has been changed!";
}

// Modify CSS styles
function changeStyle() {
    document.getElementById('main-title').style.color = "tomato";
 document.getElementById('main-title').style.fontSize = "3rem";
}

// Add an element
function addElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "You just added a new paragraph!";
    newElement.id = "newPara";
    document.getElementById("container").appendChild(newElement);
}

// Remove an element
function removeElement() {
    const element = document.getElementById("newPara");
    if (element) {
        element.remove();
    } else {
        alert("Nothing to remove!");
    }
}