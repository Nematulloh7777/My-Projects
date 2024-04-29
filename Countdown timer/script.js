let countdownDate = new Date('September 25, 2024 09:20:08').getTime();

const timer = setInterval(updateCountdown, 100);

function updateCountdown() {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function changeColor(color) {
    const labels = document.getElementsByClassName('h1');
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = color;
    }
}





/*
// Ешё один вариант
function updateCountdown() {
    // Получаем выбранную дату
    const selectedDate = new Date(document.getElementById('countdownDate').value);
    // Удаляем старый интервал, если он существует
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    // Вызываем функцию для обновления времени
    updateTimer(selectedDate);
    // Устанавливаем новый интервал для обновления времени каждую секунду
    countdownInterval = setInterval(function() {
        updateTimer(selectedDate);
    }, 1000);
}

// Функция для обновления времени
function updateTimer(selectedDate) {
    // Получаем текущее время
    const now = new Date();
    // Вычисляем разницу между текущим временем и выбранной датой
    const distance = selectedDate.getTime() - now.getTime();
    // Вычисляем значения дней, часов, минут и секунд
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Обновляем отображаемые значения в карточках
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

// Функция для форматирования времени (добавление ведущего нуля)
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function changeColor(color) {
    const labels = document.getElementsByClassName('h1');
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = color;
    }
}


//  css

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card {
            border: 1px solid transparent;
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            margin: 0 10px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transition: box-shadow 0.3s, border-color 0.3s;
            cursor: pointer;
        }

        .card:hover {
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.5);
        }

        .number {
            font-size: 70px;
            font-weight: bold;
        }

        .label {
            font-size: 40px;
            margin-top: 10px;
        }

        input[type="date"] {
            margin-top: 20px;
            font-size: 16px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        button {
            margin-top: 10px;
            padding: 8px 16px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>

    // html
    <div class="container">
        <div class="card" id="daysCard">
            <div class="number" id="days">00</div>
            <div class="label">Days</div>
        </div>
        <div class="card" id="hoursCard">
            <div class="number" id="hours">00</div>
            <div class="label">Hours</div>
        </div>
        <div class="card" id="minutesCard">
            <div class="number" id="minutes">00</div>
            <div class="label">Minutes</div>
        </div>
        <div class="card" id="secondsCard">
            <div class="number" id="seconds">00</div>
            <div class="label">Seconds</div>
        </div>
        <input type="date" id="countdownDate" value="2025-01-01">
        <button onclick="updateCountdown()">Update Countdown</button>
    </div>

*/