const form = document.getElementById('dates-form');
const dateType = document.getElementById('date-type');
const date = document.getElementById('date');
const datesList = document.getElementById('dates-list');

let dates = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newDate = {
        type: dateType.value,
        date: date.value,

    };

    dates.push(newDate);
    renderDates();
    form.reset();
});

function renderDates() {
    datesList.innerHTML = '';

    dates.forEach((lake, index) => {
        const dateItem = document.createElement('div');
        dateItem.classList.add('date-item');

        const dateTypeElement = document.createElement('span');
        dateTypeElement.classList.add('date-type');
        dateTypeElement.textContent = lake.type;
        dateItem.appendChild(dateTypeElement);

        const dateElement = document.createElement('span');
        dateElement.textContent = ` - ${lake.date}`;
        dateItem.appendChild(dateElement);

        datesList.appendChild(dateItem);
    });
}