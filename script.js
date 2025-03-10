let exitedCount = 0;
let returnedCount = 0;

const exitBtn = document.getElementById('exitBtn');
const returnBtn = document.getElementById('returnBtn');
const endShiftBtn = document.getElementById('endShiftBtn');
const exitedDisplay = document.getElementById('exitedCount');
const returnedDisplay = document.getElementById('returnedCount');
const totalExitDisplay = document.getElementById('totalExit');
const totalReturnDisplay = document.getElementById('totalReturn');

exitBtn.addEventListener('click', () => {
    exitedCount++;
    exitedDisplay.textContent = exitedCount;
});

returnBtn.addEventListener('click', () => {
    returnedCount++;
    returnedDisplay.textContent = returnedCount;
});

endShiftBtn.addEventListener('click', () => {
    totalExitDisplay.textContent = exitedCount;
    totalReturnDisplay.textContent = returnedCount;
    exitedCount = 0;
    returnedCount = 0;
    exitedDisplay.textContent = exitedCount;
    returnedDisplay.textContent = returnedCount;
});
