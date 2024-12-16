document.addEventListener('DOMContentLoaded', () => {
  // Анимация заголовка
  const h1Element = document.querySelector('h1');
  if (h1Element) {
    h1Element.addEventListener('mouseover', () => {
      h1Element.style.transition = '0.3s';
      h1Element.style.transform = 'scale(1.1)';
    });

    h1Element.addEventListener('mouseout', () => {
      h1Element.style.transform = 'scale(1)';
    });

    h1Element.addEventListener('click', () => {
      alert('Вы кликнули на заголовок - так держать!');
    });
  }

  // Аватар
  const studentPhoto = document.getElementById('studentPhoto');
  if (studentPhoto) {
    studentPhoto.addEventListener('mouseover', () => {
      studentPhoto.style.transition = '1s ease';
      studentPhoto.style.transform = 'rotate(360deg)';
    });

    studentPhoto.addEventListener('mouseout', () => {
      studentPhoto.style.transition = '0.5s ease';
      studentPhoto.style.transform = 'rotate(0deg)';
    });

    studentPhoto.addEventListener('click', () => {
      studentPhoto.src = 'img/teacher.jpg'; 
      studentPhoto.alt = 'Любимый преподаватель';
    });

    studentPhoto.addEventListener('dblclick', () => {
      alert('Не налегай, у меня не так много любимых преподавателей');
    });
  }

  // Аккордеон с улучшенной анимацией
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const collapse = accordion.querySelector('.accordion-collapse');

    if (header && collapse) {
      // Начальная установка стилей
      collapse.style.overflow = 'hidden';
      collapse.style.transition = 'max-height 0.3s ease-out';
      collapse.style.maxHeight = '0';

      header.addEventListener('click', () => {
        if (collapse.classList.contains('show')) {
          // Закрытие
          collapse.style.maxHeight = '0';
          collapse.classList.remove('show');
        } else {
          // Открытие
          collapse.classList.add('show');
          collapse.style.maxHeight = collapse.scrollHeight + 'px';
        }
      });

      // Обработка окончания анимации
      collapse.addEventListener('transitionend', () => {
        if (!collapse.classList.contains('show')) {
          collapse.style.maxHeight = '0';
        }
      });
    }
  });

  // Добавление строки в таблицу лекций
  function addRowToTable(tableBody, topicText) {
    if (topicText.trim() === '') {
      alert('Строка не может быть пустой!');
      return;
    }

    const rowCount = tableBody.rows.length;
    const newRow = tableBody.insertRow();

    // Номер строки
    const cellNumber = newRow.insertCell(0);
    cellNumber.textContent = rowCount + 1;

    // Тема
    const cellTopic = newRow.insertCell(1);
    cellTopic.textContent = topicText;

    // Дополнительные столбцы (например, чекбокс или выпадающие списки)
    const cellCheckbox = newRow.insertCell(2);
    cellCheckbox.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox">
      </div>
    `;
      // Для практик
  const cellStatus = newRow.insertCell(2);
  cellStatus.innerHTML = `
    <select class="form-select attendance-select">
      <option selected>Статус</option>
      <option value="present">Присутствовал</option>
      <option value="absent">Отсутствовал</option>
      <option value="valid">Уважительная</option>
    </select>
  `;

  // Добавить оценку для практики
  const cellGrade = newRow.insertCell(3);
  cellGrade.innerHTML = `
    <select class="form-select grade-select">
      <option selected>Оценка</option>
      <option value="5">Отлично</option>
      <option value="4">Хорошо</option>
      <option value="3">Удовлетворительно</option>
      <option value="2">Неудовлетворительно</option>
    </select>
  `;

  }

// Обработчик добавления лекции
document.getElementById('addLectureButton').addEventListener('click', () => {
  const input = document.getElementById('lectureInput');
  const lecturesTableBody = document.getElementById('lecturesTableBody');
  
  if (input.value.trim() !== '') {
    const newRow = lecturesTableBody.insertRow();

    // Номер строки
    const cellNumber = newRow.insertCell(0);
    const rowCount = lecturesTableBody.rows.length;
    cellNumber.textContent = rowCount;

    // Тема лекции
    const cellTopic = newRow.insertCell(1);
    cellTopic.textContent = input.value;
    
    // Статус присутствия (с чекбоксом)
    const cellCheckbox = newRow.insertCell(2);
    cellCheckbox.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox">
      </div>
    `;

    // Очистить поле ввода
    input.value = '';
  } else {
    alert('Введите тему лекции!');
  }
});


// Обработчик добавления практики
document.getElementById('addPracticeButton').addEventListener('click', () => {
  const input = document.getElementById('practiceInput');
  const practicesTableBody = document.getElementById('practicesTableBody');
  
  if (input.value.trim() !== '') {
    const newRow = practicesTableBody.insertRow();

    // Номер строки
    const cellNumber = newRow.insertCell(0);
    const rowCount = practicesTableBody.rows.length;
    cellNumber.textContent = rowCount;

    // Тема практики
    const cellTopic = newRow.insertCell(1);
    cellTopic.textContent = input.value;
    
    // Статус посещения
    const cellStatus = newRow.insertCell(2);
    cellStatus.innerHTML = `
      <select class="form-select attendance-select">
        <option selected>Статус</option>
        <option value="present">Присутствовал</option>
        <option value="absent">Отсутствовал</option>
        <option value="valid">Уважительная</option>
      </select>
    `;
    
    // Оценка
    const cellGrade = newRow.insertCell(3);
    cellGrade.innerHTML = `
      <select class="form-select grade-select">
        <option selected>Оценка</option>
        <option value="5">Отлично</option>
        <option value="4">Хорошо</option>
        <option value="3">Удовлетворительно</option>
        <option value="2">Неудовлетворительно</option>
      </select>
    `;

    // Очистить поле ввода
    input.value = '';
  } else {
    alert('Введите тему практики!');
  }
});


  // Гамбургер-меню
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }

  // Переключение между семестрами
  const toggleSemesterButton = document.getElementById('secondSemesterButton');
  const lecturesTableBody = document.querySelector('#lecturesAccordion tbody');
  const practicesTableBody = document.querySelector('#practicesAccordion tbody');

  // Темы первого семестра
  const firstSemesterLectures = [
    'Основы языка HTML',
    'Углубленное изучение HTML',
    'Основы работы с CSS',
    'Адаптивная верстка с Flexbox и Grid Layout',
    'Bootstrap - работа с фреймворком',
    'Основы JavaScript',
    'Работа с DOM и событиями в JavaScript',
    'Введение в GitHub и GitHub Pages'
  ];

  const firstSemesterPractices = [
    'Основы языка HTML',
    'Формы и кнопки в HTML', 
    'Таблицы и интерактивные элементы HTML'
  ];

  // Темы второго семестра
  const secondSemesterLectures = [
    'Базовое бэкенд-приложение',
    'HTTP-запросы',
    'JSON и работа с ним',
    'HTTP-ответы',
    'Проектирование API',
    'Роутинг и его настройка',
    'NoSQL базы данных',
    'Обеспечение авторизации и доступа пользователей'
  ];

  const secondSemesterPractices = [
    'Работа сторонних сервисов уведомления и авторизации',
    'Основы ReactJS',
    'Работа с компонентами динамической DOM',
    'Использование хуков в React',
    'Основы микросервисной архитектуры',
    'Разработка классических модулей веб-приложений'
  ];

  let showingSecondSemester = false;

  const renderLectures = (lectures) => {
    lecturesTableBody.innerHTML = lectures.map((topic, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${topic}</td>
        <td>
          <div class="form-check">
            <input class="form-check-input" type="checkbox">
          </div>
        </td>
      </tr>
    `).join('');
  };

  const renderPractices = (practices) => {
    practicesTableBody.innerHTML = practices.map((topic, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${topic}</td>
        <td>
          <select class="form-select attendance-select">
            <option selected>Статус</option>
            <option value="present">Присутствовал</option>
            <option value="absent">Отсутствовал</option>
            <option value="valid">Уважительная</option>
          </select>
        </td>
        <td>
          <select class="form-select grade-select">
            <option selected>Оценка</option>
            <option value="5">Отлично</option>
            <option value="4">Хорошо</option>
            <option value="3">Удовлетворительно</option>
            <option value="2">Неудовлетворительно</option>
          </select>
        </td>
      </tr>
    `).join('');
  };

  if (toggleSemesterButton) {
    toggleSemesterButton.addEventListener('click', () => {
      if (showingSecondSemester) {
        renderLectures(firstSemesterLectures);
        renderPractices(firstSemesterPractices);
        toggleSemesterButton.textContent = 'Посмотреть практики второго семестра';
      } else {
        renderLectures(secondSemesterLectures);
        renderPractices(secondSemesterPractices);
        toggleSemesterButton.textContent = 'Вернуться к темам первого семестра';
      }
      showingSecondSemester = !showingSecondSemester;
    });

    // Инициализация первого семестра
    renderLectures(firstSemesterLectures);
    renderPractices(firstSemesterPractices);
  }

  // Функционал для слайдера
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (sliderWrapper && slides.length > 0 && prevButton && nextButton && dotsContainer) {
    let currentSlide = 0;
    
    // Создаем точки
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    
    function goToSlide(n) {
      currentSlide = n;
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateDots();
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(currentSlide);
    }
    
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Автоматическое переключение каждые 5 секунд
    setInterval(nextSlide, 5000);
  }

  // Кнопка прокрутки наверх
  const scrollToTopButton = document.getElementById('scrollToTop');
  
  if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Модальное окно для услуг
  const serviceModalFunctions = () => {
    const modal = document.getElementById('modal');
    const orderForm = document.getElementById('order-form');
    const successMessage = document.getElementById('success-message');

    window.openModal = function(service) {
      if (modal) modal.style.display = 'block';
      const serviceTypeInput = document.getElementById('service-type');
      if (serviceTypeInput) serviceTypeInput.value = service;
    }

    window.closeModal = function() {
      if (modal) modal.style.display = 'none';
      if (successMessage) successMessage.style.display = 'none';
      if (orderForm) orderForm.reset();
    }

    if (orderForm) {
      orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (orderForm) orderForm.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';
        
        setTimeout(function() {
          closeModal();
          if (orderForm) orderForm.style.display = 'block';
        }, 3000);
      });
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
      if (event && event.target === modal) {
        closeModal();
      }
    }
  }
  serviceModalFunctions();

  // Маска для телефона
  const phoneInput = document.querySelector('input[type="tel"]');
  
  if (phoneInput) {
    function maskPhone(event) {
      const matrix = '7__________';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');
      
      if (def.length >= val.length) val = def;
      
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length 
          ? val.charAt(i++) 
          : i >= val.length 
            ? '' 
            : a;
      });
      
      if (event.type === 'blur') {
        if (this.value.length === 2) this.value = '';
      }
    }

    phoneInput.addEventListener('input', maskPhone);
    phoneInput.addEventListener('focus', maskPhone);
    phoneInput.addEventListener('blur', maskPhone);
  }
});
