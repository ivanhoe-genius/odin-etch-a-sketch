const divContainer = document.querySelector('.container');
const btnNewSketch = document.querySelector('.new-sketch');
let memorizedNumberOfDivs = 16;

function createGrid(numberOfDivs) {
    for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add('div-element');
        divElement.style.backgroundColor = 'black';
        divElement.style.filter = 'brightness(1)';
        divElement.id = 'divelement' + i;
        divElement.style.width = (500 - numberOfDivs) / numberOfDivs + 'px';

        divContainer.appendChild(divElement);

        divElement.addEventListener('mouseenter', (event) => {
            if (event.target.style.backgroundColor === 'black') {
                event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            } else {
                const oldFilterValue = event.target.style.filter;
                const oldBrightnessValue = oldFilterValue.match(/\(([^)]+)\)/)[1];
                event.target.style.filter = `brightness(${oldBrightnessValue - 0.1})`;

            }
        });
    }
}

createGrid(memorizedNumberOfDivs);

function enterNumber() {

    let userInput = '';

    userInput = prompt('Please enter the number of squares per side for the new grid.\nMax allowed is 100.');

    if (userInput === null) {
        return memorizedNumberOfDivs;
    }

    const convertedInput = parseInt(userInput.trim());

    if (userInput === '' || !convertedInput || convertedInput < 0 || convertedInput > 100) {
        alert('Please enter a valid number of squares.\nAny value between 1 and 100.');
        enterNumber();
        return memorizedNumberOfDivs;
    } else {
        console.log('else', convertedInput);
        memorizedNumberOfDivs = convertedInput;
        return convertedInput;
    }

}

btnNewSketch.addEventListener('click', () => {
    document.querySelectorAll('.div-element').forEach((element) => {
        element.remove();
    });
    createGrid(enterNumber());

});