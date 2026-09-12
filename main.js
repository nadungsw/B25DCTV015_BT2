const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;

        // Thay 'Clear' bằng 'AC' để giống máy Casio
        if (value === 'AC') {
            display.innerText = '0';
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = 'Lỗi';
            }
        } else {
            if (display.innerText === '0' || display.innerText === 'Lỗi') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});