function updateTime() {
    const timezoneOffset = parseInt(document.getElementById('timezone').value, 10);
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const timeZoneDate = new Date(utc + 3600000 * timezoneOffset);

    const hours = timeZoneDate.getHours().toString().padStart(2, '0');
    const minutes = timeZoneDate.getMinutes().toString().padStart(2, '0');
    const seconds = timeZoneDate.getSeconds().toString().padStart(2, '0');

    const year = timeZoneDate.getFullYear();
    const month = (timeZoneDate.getMonth() + 1).toString().padStart(2, '0');
    const day = timeZoneDate.getDate().toString().padStart(2, '0');
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const weekday = weekdays[timeZoneDate.getDay()];

    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerText = `${weekday}, ${day}.${month}.${year}`;
}

document.getElementById('timezone').addEventListener('change', updateTime);
setInterval(updateTime, 1000);
updateTime();
