// Массивы с темами
const lectures = [
    'Введение в веб-разработку',
    'Основы HTML',
    'Основы CSS',
    'Операторы JavaScript',
    'Объекты в JavaScript'
];

const practices = [
    'Создание структуры HTML',
    'Оформление стилей',
    'Основы программирования',
    'Работа с DOM',
    'Обработка событий'
];

// Функция для создания элемента практического задания
function createPracticeTask(title, taskNumber) {
    const button = document.createElement('button');
    button.textContent = title;
    button.classList.add('practice-task-button');
    button.addEventListener('click', () => handleTaskClick(taskNumber));
    return button;
}

// Функция для создания секции с практическими заданиями
function createPracticeTasks() {
    const container = document.createElement('div');
    container.classList.add('container', 'practice-section'); // Добавлен класс practice-section
    
    const heading = document.createElement('h2');
    heading.textContent = 'Практические задания';
    container.appendChild(heading);
    
    const practiceTasksWrapper = document.createElement('div');
    practiceTasksWrapper.classList.add('practice-tasks');
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('practice-buttons');
    
    const tasks = [
        { title: 'Задание 1: Переменные и условия', number: 1 },
        { title: 'Задание 2: Циклы', number: 2 },
        { title: 'Задание 3: Массивы', number: 3 },
        { title: 'Задание 4: Поиск тем на \'О\'', number: 4 }
    ];
    
    tasks.forEach(task => {
        const button = createPracticeTask(task.title, task.number);
        buttonsContainer.appendChild(button);
    });
    
    practiceTasksWrapper.appendChild(buttonsContainer);
    container.appendChild(practiceTasksWrapper);
    
    return container;
}

// Обработчик клика по заданию
function handleTaskClick(taskNumber) {
    switch(taskNumber) {
        case 1:
            task1();
            break;
        case 2:
            task2();
            break;
        case 3:
            task3();
            break;
        case 4:
            task4();
            break;
    }
}

// Задание 1: Переменные и условия
function task1() {
    // Запрашиваем имя пользователя
    const name = prompt('Введите ваше имя:');
    if (!name) {
        alert('Вы не ввели имя');
        return;
    }

    // Запрашиваем возраст
    const age = prompt('Введите ваш возраст:');
    if (age === null) return;
    
    const ageNum = parseInt(age);
    if (isNaN(ageNum)) {
        alert('Пожалуйста, введите корректное число');
        return;
    }

    // Сохраняем введенные данные в переменные
    const userName = name;
    const userAge = ageNum;

    // Проверяем возраст и выводим соответствующее сообщение
    let message = `Имя: ${userName}\nВозраст: ${userAge}\n\n`;
    
    if (userAge >= 18) {
        message += 'Вы совершеннолетний';
    } else {
        message += 'Вы несовершеннолетний';
    }
    
    alert(message);
    console.log(message);
}

// Задание 2: Циклы
function task2() {
    let result = 'Числа от 1 до 10:\n';
    
    // Цикл for для чисел от 1 до 10
    for (let i = 1; i <= 10; i++) {
        result += i + ' ';
    }
    
    result += '\n\nЧисла от 10 до 1:\n';
    
    // Цикл while для чисел от 10 до 1
    let i = 10;
    while (i >= 1) {
        result += i + ' ';
        i--;
    }
    
    alert(result);
    console.log(result);
}

// Задание 3: Работа с массивами
function task3() {
    let result = 'Темы лекций:\n';
    lectures.forEach((lecture, index) => {
        result += `${index + 1}. ${lecture}\n`;
    });
    
    result += '\nТемы практик:\n';
    practices.forEach((practice, index) => {
        result += `${index + 1}. ${practice}\n`;
    });
    
    alert(result);
    console.log(result);
}

// Задание 4: Поиск тем на "О"
function task4() {
    // Функция для поиска тем на "О"
    function findTopicsStartingWithO(topics) {
        return topics.filter(topic => topic.toLowerCase().startsWith('о'));
    }
    
    // Объединяем массивы и ищем темы на "О"
    const topicsWithO = [
        ...findTopicsStartingWithO(lectures),
        ...findTopicsStartingWithO(practices)
    ];
    
    let result = 'Темы, начинающиеся на "О":\n';
    topicsWithO.forEach((topic, index) => {
        result += `${index + 1}. ${topic}\n`;
    });
    
    alert(result);
    console.log(result);
}

// Добавляем практические задания на страницу после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Находим секцию с видео
    const videoSection = document.querySelector('#backend');
    
    if (videoSection) {
        // Создаем секцию с заданиями
        const practiceTasks = createPracticeTasks();
        
        // Вставляем секцию с заданиями после секции с видео
        videoSection.after(practiceTasks);
    }
});