const drawBtn = document.getElementById('drawBtn');
const nameListInput = document.getElementById('nameList');
const resultDisplay = document.getElementById('resultDisplay');

drawBtn.addEventListener('click', () => {
    // 1. 取得名單並過濾掉空白行
    const names = nameListInput.value.split('\n').map(name => name.trim()).filter(name => name !== "");

    if (names.length === 0) {
        alert("請先輸入名單喔！");
        return;
    }

    // 2. 隨機抽選
    const randomIndex = Math.floor(Math.random() * names.length);
    const luckyPerson = names[randomIndex];

    // 3. 執行打字效果
    typeEffect(luckyPerson);
});

function typeEffect(text) {
    resultDisplay.textContent = ""; // 先清空舊結果
    let i = 0;
    
    // 清除可能還在執行的舊計時器
    if (window.typeTimer) clearInterval(window.typeTimer);

    window.typeTimer = setInterval(() => {
        resultDisplay.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(window.typeTimer);
        }
    }, 150); // 每 150 毫秒跳出一個字
}