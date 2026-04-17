function showClock() {
    const clock = document.querySelector("#clock");
    const dateDisplay = document.querySelector("#date-display");
    const resultDate = new Date();

    let hours = resultDate.getHours();
    let minutes = resultDate.getMinutes();
    let seconds = resultDate.getSeconds();

    clock.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    const days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

    let dayName = days[resultDate.getDay()];
    let monthName = months[resultDate.getMonth()];
    let dayNumber = resultDate.getDate();
    let year = resultDate.getFullYear();

    dateDisplay.innerHTML = `${dayName}, ${dayNumber} ${monthName} ${year}`;
}

setInterval(showClock, 1000);

showClock();