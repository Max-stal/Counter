let count = 0;

const countElement = document.getElementById('count');
const backBtn = document.getElementById('back');
const restartBtn = document.getElementById('restart');
const toBtn = document.getElementById('to');

function Counter() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = '#38a169';
    } else if (count < 0) {
        countElement.style.color = '#e53e3e';
    } else {
        countElement.style.color = '#a0aec0';
    }
}

toBtn.addEventListener('click', () => {
    count++;
    Counter();
});

backBtn.addEventListener('click', () => {
    count--;
    Counter();
});

restartBtn.addEventListener('click', () => {
    count = 0;
    Counter();
});

Counter();