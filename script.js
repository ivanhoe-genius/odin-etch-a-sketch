const divContainer = document.querySelector('.container');
const btnNewSketch = document.querySelector('.new-sketch');

function createGrid(numberOfDivs = 16) {
    for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add('div-element');
        divElement.id = 'divelement' + i;
        divElement.style.width = 500 / numberOfDivs + 'px';

        divContainer.appendChild(divElement);

        divElement.addEventListener('mouseenter', (event) => {
            event.target.classList.add('color-change');
        });
    }
}

createGrid();

function enterNumber() {
    const userInput = prompt('Please enter the number of squares per side for the new grid.\nMax allowed is 100.');
    // console.log('userInput', userInput);

    if (userInput === null) {
        return;
    }

    const convertedInput = parseInt(userInput.trim());
    // console.log('convertedInput', convertedInput);

    if (!convertedInput || convertedInput < 0 || convertedInput > 100) {
        alert('Please enter a valid number of squares.\nAny value between 1 and 100.');
        enterNumber();
    }

    return convertedInput;
}

btnNewSketch.addEventListener('click', () => {
    document.querySelectorAll('.div-element').forEach((element) => {
        element.remove();
    });
    createGrid(enterNumber());
    // console.log(numberOfDivs);

});