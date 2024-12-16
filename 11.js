document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message-container';
    messageContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 300px;
        z-index: 1000;
    `;
    document.body.appendChild(messageContainer);
    
    const showMessage = (message, isError = false) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.cssText = `
            background-color: ${isError ? '#ffdddd' : '#ddffdd'};
            color: ${isError ? 'red' : 'green'};
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transform: scale(0);
            animation: scaleUp 0.5s ease forwards;
        `;
        messageContainer.appendChild(messageElement);
        
        setTimeout(() => {
            messageElement.style.animation = 'fadeOutMessage 0.5s ease';
            setTimeout(() => {
                messageElement.remove();
            }, 500);
        }, 5000);
    };
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.textContent = `
        @keyframes scaleUp {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        @keyframes fadeOutMessage {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    const showConsoleMessage = (message) => {
        console.log(message);
        showMessage(message);
    };
    
    const colors = ['blue', 'red', 'green', 'yellow'];
    let currentColorIndex = 0;
    
    const changeBackgroundColor = () => {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    };

    const toggleVisibility = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            const isHidden = element.style.display === 'none';
            element.style.opacity = isHidden ? '0' : '1';
            element.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                element.style.display = isHidden ? 'block' : 'none';
                element.style.opacity = isHidden ? '1' : '0';
            }, 500);
        } else {
            console.error(`Элемент с селектором ${selector} не найден!`);
        }
    };

    // Пример использования toggleVisibility
    const toggleVisibilityButton = document.getElementById('toggleVisibilityButton');
    toggleVisibilityButton.addEventListener('click', () => {
        toggleVisibility('.content');
    });
    
    const logCurrentTime = () => {
        const now = new Date();
        const timeString = now.toTimeString().split(' ')[0];
        console.log(`Текущее время: ${timeString}`);
        showMessage(`Текущее время: ${timeString}`);
    };
    
    const resetBackgroundColor = () => {
        document.body.style.backgroundColor = '';
    };
    
    const form = document.getElementById('dataForm');
    const addRowButton = document.getElementById('addRowButton');
    const additionalRowsContainer = document.getElementById('additionalRows');

    const addNewRow = () => {
        const rowCount = additionalRowsContainer.children.length + 1;
        const newRow = document.createElement('div');
        newRow.classList.add('mb-3');
        newRow.innerHTML = `
            <label for="extraLabel${rowCount}" class="form-label">Название поля ${rowCount}</label>
            <input type="text" class="form-control extra-label" id="extraLabel${rowCount}" name="extraLabel${rowCount}" placeholder="Введите название поля">
            <input type="text" class="form-control extra-input mt-2" id="extra${rowCount}" name="extra${rowCount}" placeholder="Введите данные">
        `;
        additionalRowsContainer.appendChild(newRow);
    };
    

    addRowButton.addEventListener('click', addNewRow);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value.trim();
        const comment = document.getElementById('comment').value.trim();
        const extraLabels = document.querySelectorAll('.extra-label');
        const extraInputs = document.querySelectorAll('.extra-input');

    // Проверки данных
        const nameRegex = /^[А-Я][а-я]+$/;
        if (!nameRegex.test(name)) {
            showMessage('Ошибка: Имя должно начинаться с заглавной буквы и содержать только русские буквы.', true);
            return;
        }

        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phone)) {
            showMessage('Ошибка: Телефон должен содержать только цифры.', true);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Ошибка: Некорректный формат e-mail.', true);
            return;
        }

        if (!name || !email || !comment) {
            showMessage('Ошибка: Заполните обязательные поля (Имя, E-mail, Комментарий).', true);
            return;
        }
        let extraFieldsMessage = '';
        for (let i = 0; i < extraInputs.length; i++) {
            const extraLabel = extraLabels[i].value.trim();
            const extraInput = extraInputs[i].value.trim();
            if (!extraLabel || !extraInput) {
                showMessage('Ошибка: Все дополнительные поля должны быть заполнены.', true);
                return;
            }
            extraFieldsMessage += `${extraLabel}: ${extraInput}\n`;
        }
    
    // Анимация и вывод введённых данных
        const resultMessage = `
            Имя: ${name}
            E-mail: ${email}
            Телефон: ${phone || 'Не указан'}
            Дата: ${date || 'Не указана'}
            Комментарий: ${comment}
            ${extraFieldsMessage}
        `;
        showMessage('Форма успешно отправлена!');
        showMessage(resultMessage);

        // Сброс формы
        form.reset();
        additionalRowsContainer.innerHTML = '';
    });
    
    document.getElementById('showMessageButton').addEventListener('click', () => {
        showConsoleMessage('Это сообщение из консоли!');
    });
    
    document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
    
    document.getElementById('logTimeButton').addEventListener('click', logCurrentTime);
    
    document.getElementById('resetColorButton').addEventListener('click', resetBackgroundColor);
});