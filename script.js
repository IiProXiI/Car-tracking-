let exitedCount = 0;
let returnedCount = 0;

// زر خروج عربة
document.getElementById("exitBtn").addEventListener("click", function() {
    exitedCount++;
    document.getElementById("exitedCount").textContent = exitedCount;
});

// زر عودة عربة
document.getElementById("returnBtn").addEventListener("click", function() {
    returnedCount++;
    document.getElementById("returnedCount").textContent = returnedCount;
});
