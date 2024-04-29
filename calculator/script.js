window.addEventListener('DOMContentLoaded', () => {

    const input_1 = document.querySelector('.input_1'),
        input_2 = document.querySelector('.input_2'),
        btn_plus = document.querySelector('.btn_plus'),
        btn_minus = document.querySelector('.btn_minus'),
        btn_division = document.querySelector('.btn_division'),
        btn_multiplication = document.querySelector('.btn_multiplication'),
        resultDiv = document.getElementById('result');
    
    function targets() {
        input_1.value = ''; 
        input_2.value = '';
    }
    
    function performOperation(operation) {
        const value1 = parseFloat(input_1.value);
        const value2 = parseFloat(input_2.value);
        
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.innerText = `Введите число в оба поля`;
        } else {
            let result;
            switch(operation) {
                case '+':
                    result = value1 + value2;
                    break;
                case '-':
                    result = value1 - value2;
                    break;
                case '/':
                    if (value2 === 0) {
                        resultDiv.innerText = `Деление на ноль невозможно`;
                        return;
                    }
                    result = value1 / value2;
                    break;
                case '*':
                    result = value1 * value2;
                    break;
            }
            resultDiv.innerText = `Результат: ${value1} ${operation} ${value2} = ${result}`;
           
        }
    }
    
    btn_plus.addEventListener('click', () => {
        performOperation('+');
    });
    
    btn_minus.addEventListener('click', () => {
        performOperation('-');
    });
    
    btn_division.addEventListener('click', () => {
        performOperation('/');
    });
    
    btn_multiplication.addEventListener('click', () => {
        performOperation('*');
    });
    
    // Theme
    const themeSwitch = document.getElementById('themeSwitch');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        toggleIcons();
    });
    function toggleIcons() {
        if (document.body.classList.contains('dark-theme')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
        toggleIcons();
    });

});


/*
// СТАРЫЙ КОД 
    const input_1 = document.querySelector('.input_1'),
        input_2 = document.querySelector('.input_2'),
        btn_plus = document.querySelector('.btn_plus'),
        btn_minus = document.querySelector('.btn_minus'),
        btn_divison = document.querySelector('.btn_divison'),
        btn_multiplication = document.querySelector('.btn_multiplication'),
        resultDiv = document.getElementById('result');


    function targets() {
        input_1.value = ''; 
        input_2.value = '';
    }

    btn_plus.addEventListener('click', () => {
        const value1 = parseFloat(input_1.value);
        const value2 = parseFloat(input_2.value);
        
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.innerText = `Введите число в оба поля`;
        } else {
            const result = value1 + value2;
            resultDiv.innerText = `Результат:  ${input_1.value} + ${input_2.value} = ${result}`;
            targets(); 
        }
    });

    btn_minus.addEventListener('click', () => {
        const value1 = parseFloat(input_1.value);
        const value2 = parseFloat(input_2.value);
        
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.innerText = `Введите число в оба поля`;
        } else {
            const result = value1 - value2;
            resultDiv.innerText = `Результат:  ${input_1.value} - ${input_2.value} = ${result}`;
            targets(); 
        }
    })

    btn_divison.addEventListener('click', () => {
        const value1 = parseFloat(input_1.value);
        const value2 = parseFloat(input_2.value);
        
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.innerText = `Введите число в оба поля`;
        } else {
            const result = value1 / value2;
            resultDiv.innerText = `Результат:  ${input_1.value} / ${input_2.value} = ${result}`;
            targets(); 
        }
    });

    btn_multiplication.addEventListener('click', () => {
        const value1 = parseFloat(input_1.value);
        const value2 = parseFloat(input_2.value);
        
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.innerText = `Введите число в оба поля`;
        } else {
            const result = value1 * value2;
            resultDiv.innerText = `Результат:  ${input_1.value} * ${input_2.value} = ${result}`;
            targets(); 
        }
    });

*/