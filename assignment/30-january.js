// 1. Click Event Handling
// Create a button with the text "Click Me". When the button is clicked, change its text to "Clicked!" using JavaScript.

// 🔹 Bonus: Make sure that the button text changes back to "Click Me" if clicked again.


let button = document.getElementById("button");
button.addEventListener("click", function(){
    if(button.innerText === "Click Me"){
        button.innerText = "Clicked!";
    }
    else{
        button.innerText = "Click Me";
    }       
});




// 2. Hover Event (Mouseover & Mouseout)
// Create a <div> with some text inside it. When the user hovers over the <div>, its background color should change to blue. When the user moves the mouse out, the background should return to its original color.


let div = document.createElement("div");
div.innerText = "Hover Me";
document.body.appendChild(div);

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "blue";
});

div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "white";
}); 





// 3. Using addEventListener()
// Write JavaScript code to create an input field and a paragraph (<p>). Add an event listener to the input field that updates the paragraph with whatever the user types in real-time.


// let input = document.createElement("input");
// let p = document.createElement("p");
// document.body.appendChild(input);
// document.body.appendChild(p);

// input.addEventListener("input", function(){
//     p.innerText = input.value;
// }); 




// 4. Removing an Event Listener
// Create a button with the text "Disable Click" and another button with the text "Click Me". When the "Disable Click" button is clicked, it should remove the click event listener from the "Click Me" button so that it no longer responds to clicks.


let disableButton = document.createElement("button");
disableButton.innerText = "Disable Click";
document.body.appendChild(disableButton);

let clickButton = document.createElement("button");
clickButton.innerText = "Click Me";
document.body.appendChild(clickButton);

disableButton.addEventListener("click", function(){
    clickButton.removeEventListener("click", function(){
        console.log("Clicked!");
    });
});         



// 5. Keydown Event
// Write a JavaScript program that listens for key presses. When a user presses the Enter key (Enter key code: 13), an alert should pop up with the message: "Enter key was pressed!"

let input = document.createElement("input");
document.body.appendChild(input);   

input.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        alert("Enter key was pressed!");
    }   
}) 