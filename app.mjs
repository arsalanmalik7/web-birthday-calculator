window.calculateBirthday = function () {
    // Taking all input values
    let selectMonth = document.querySelector("#months");
    let selectDate = document.querySelector("#date");
    let enterYear = document.querySelector("#year");

    let month = selectMonth.value;
    let date = selectDate.value;
    let year = enterYear.value;

    date = parseInt(date);
    year = parseInt(year);

    // Creating current time
    let now = new Date();
    let currentMonth = now.getMonth();
    let currentDate = now.getDate();
    let currentYear = now.getFullYear();

    const twelveMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let age = currentYear - year;
    const monthIndex = twelveMonths.indexOf(month);

    if (date !== currentDate && monthIndex !== currentMonth) {
        age = age - 1;
    }

    // Calculate the next birthday
    let nextBirthday = new Date(year + age, monthIndex, date);
    if (nextBirthday < now) {
        nextBirthday = new Date(year + age + 1, monthIndex, date);
    }

    // Calculate the time remaining until the next birthday
    let timeRemaining = nextBirthday.getTime() - now.getTime();
    let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the time remaining until the next birthday in the result-para element
    document.querySelector("#result-para").innerHTML = `You are ${age} years old and your next birthday 
    is on ${twelveMonths[monthIndex]} ${date}, ${year + age + 1}.<br>Time remaining until your next 
    birthday: ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes,
    and ${secondsRemaining} seconds.`;

    setInterval(calculateBirthday, 1000);


}
