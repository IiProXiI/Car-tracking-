/*
 * © 2025 جميع الحقوق محفوظة
 * تصميم وبرمجة: البراء حلواني
 * لا يُسمح بنسخ أو إعادة استخدام هذا الكود بدون إذن
 */

let exitedCount = 0;
let returnedCount = 0;
let totalExit = 0;
let totalReturn = 0;

// زر خروج عربة
document.getElementById("exitBtn").addEventListener("click", function() {
    exitedCount++;
    totalExit++;
    document.getElementById("exitedCount").textContent = exitedCount;
    document.getElementById("totalExit").textContent = totalExit;
});

// زر عودة عربة
document.getElementById("returnBtn").addEventListener("click", function() {
    returnedCount++;
    totalReturn++;
    document.getElementById("returnedCount").textContent = returnedCount;
    document.getElementById("totalReturn").textContent = totalReturn;
});

// زر إنهاء الوردية
document.getElementById("endShiftBtn").addEventListener("click", function() {
    exitedCount = 0;
    returnedCount = 0;
    document.getElementById("exitedCount").textContent = exitedCount;
    document.getElementById("returnedCount").textContent = returnedCount;
    alert("تم إنهاء الوردية!");
});

// 🔒 حماية الموقع من النسخ وسرقة الكود
document.addEventListener('contextmenu', event => event.preventDefault()); // تعطيل الزر الأيمن
document.addEventListener('keydown', function(event) {  
    if (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'I')) {  
        event.preventDefault();  
    }  
});
console.log("© 2025 جميع الحقوق محفوظة - تصميم وبرمجة: البراء حلواني");
