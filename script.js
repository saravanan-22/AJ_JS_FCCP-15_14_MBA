document.addEventListener("DOMContentLoaded", () => {
  let animationContainer = document.getElementById("animation-container");

  document.addEventListener("mousemove", (event) => {
    let letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent = "Saravanan";
    letter.style.top = `${event.clientY}px`;
    letter.style.left = `${event.clientX}px`;

    animationContainer.appendChild(letter);

    setTimeout(() => {
      letter.remove();
    }, 10);
  });
});


// document.addEventListener("DOMContentLoaded", () => { ... }):

// This part of the code listens for the DOMContentLoaded event, which fires when the HTML document has been fully loaded and parsed by the browser.
// When the event occurs, the provided arrow function is executed.
// let animationContainer = document.getElementById("animation-container");:

// It retrieves an HTML element with the id "animation-container" and stores it in the animationContainer variable. This element is assumed to be present in the HTML document.
// document.addEventListener("mousemove", (event) => { ... }):

// This code sets up an event listener for the mousemove event, which triggers whenever the mouse pointer is moved over the document.
// let letter = document.createElement("div");:

// Inside the mousemove event listener, a new div element is created and stored in the letter variable.
// letter.classList.add("letter");:

// A CSS class "letter" is added to the newly created div element. This class likely defines styles for the letters that will appear during the animation.
// letter.textContent = "Saravanan";:

// The text content of the div element is set to "Saravanan." This means that each time the mouse is moved, a "Saravanan" text element will be created at the mouse pointer's position.
// letter.style.top = ${event.clientY}px; and letter.style.left = ${event.clientX}px;:

// These lines set the top and left CSS properties of the letter div to the current mouse pointer coordinates (event.clientY and event.clientX). This makes the "Saravanan" text element follow the mouse pointer.
// animationContainer.appendChild(letter);:

// The letter div is appended as a child of the animationContainer. This is why the "Saravanan" text elements appear within the specified container.
// setTimeout(() => { letter.remove(); }, 10);:

// A setTimeout function is used to remove the letter div element after a brief delay of 10 milliseconds. This creates a temporary appearance of the "Saravanan" text, making it disappear shortly after being created. This is what gives the animation effect.