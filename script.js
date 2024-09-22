// Открытие модального окна с установкой типа услуги
function openModal(serviceType) {
    const modal = document.getElementById('modal');
    const serviceInput = document.getElementById('serviceType');
    modal.style.display = 'block'; // Отображаем модальное окно
    serviceInput.value = serviceType; // Устанавливаем выбранный тип услуги
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Скрываем, если кликнули вне окна
    }
}
// Phone number mask
document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});
