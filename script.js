let exitedCount = 0;
let returnedCount = 0;

const exitInput = document.getElementById('exitInput');
const returnInput = document.getElementById('returnInput');

const exitBtn = document.getElementById('exitBtn');
const returnBtn = document.getElementById('returnBtn');

const exitedDisplay = document.getElementById('exitedCount');
const returnedDisplay = document.getElementById('returnedCount');

// تحديث العداد عند إدخال رقم جديد في الخروج
exitInput.addEventListener('change', () => {
    const newValue = parseInt(exitInput.value);
    if (!isNaN(newValue) && newValue >= 0) {
        exitedCount = newValue;
        exitedDisplay.textContent = exitedCount;
    }
});

// تحديث العداد عند إدخال رقم جديد في العودة
returnInput.addEventListener('change', () => {
    const newValue = parseInt(returnInput.value);
    if (!isNaN(newValue) && newValue >= 0) {
        returnedCount = newValue;
        returnedDisplay.textContent = returnedCount;
    }
});

// زر خروج العربة
exitBtn.addEventListener('click', () => {
    exitedCount++;
    exitedDisplay.textContent = exitedCount;
});

// زر عودة العربة
returnBtn.addEventListener('click', () => {
    returnedCount++;
    returnedDisplay.textContent = returnedCount;
});
