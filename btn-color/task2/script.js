const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль!')
});

const tagAlert = document.querySelector('#tagAlert');
tagAlert.addEventListener('click',() => {
    alert('Пример использования команды alert')
});

const tagPrompt = document.querySelector('#tagPrompt');
tagPrompt.addEventListener('click',() => {
    prompt('Пример использования команды prompt')
    
});

