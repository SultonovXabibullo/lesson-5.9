let counter = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});
