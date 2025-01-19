//single click
// document.querySelector("#myButton").addEventListener
// ('click',() => {
//     alert('Button clicked');
// });

//double click
// document.querySelector("#myButton").addEventListener
// ('dblclick',() => {
//     alert('Button double clicked');
// });

//mouse over
// document.querySelector("#myButton").addEventListener
// ('mouseover',() => {
//     alert('Mouse over the element!');
// });

//mouse out
// document.querySelector("#myButton").addEventListener
// ('mouseout',() => {
//     alert('Mouse left the element!');
// });

//mouse move
// document.querySelector("#myButton").addEventListener
// ('mousemove',(event) => {
//     alert(`Mouse position: (${event.clientX}, ${event
// .clientX})`)
// });

//key down
// document.addEventListener('keydown', (event)=> {
//     alert(`Key pressed: ${event.key}`);
// });

//key release
// document.addEventListener('keyup', (event)=> {
//     alert(`Key released: ${event.key}`);
// });

//submit in form
// document.querySelector('#myForm').
// addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevents page refresh
//     alert('Form submitted!');
// });

// document.querySelector('#myInput').
// addEventListener('change', (event) => {
//     alert(`Input changed to: ${event.target.
//     value}`);
// });

// document.querySelector('#name').
// addEventListener('change', (event) => {
//     alert('User is filling name');
// });
// document.querySelector('#age').
// addEventListener('change', (event) => {
//     alert('User is filling Age');
// });

// document.querySelector('#name').
// addEventListener('blur', (event) => {
//     alert('Name field lost focus!');
// });

// document.addEventListener
// ('DOMContentLoaded', () => {
//     alert('DOM fully loaded and parsed');
// });

// window.addEventListener
// ('resize', () => {
//     alert('Window fully resized');
// });

window.addEventListener
('scroll', () => {
    alert('User is scrolling!');
});

