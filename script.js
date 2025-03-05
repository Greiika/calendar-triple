"use strict"

let calendar = document.querySelector('.calendar-triple');
let dates = calendar.querySelectorAll('.calendar-triple_month');
let monthTitle = calendar.querySelectorAll('.calendar-triple_month-title');
let yearTitle = calendar.querySelector('.calendar-triple_header-title h1');
let headerBg = document.querySelector('.calendar-triple_header');

let prevBtn = document.querySelector('.calendar-triple_month-arrows__prev');
let nextBtn = document.querySelector('.calendar-triple_month-arrows__next');

let date = new Date();
let year = date.getFullYear();
let currentDate = date.getDate();
let prevMonth = date.getMonth() -1;
let month = date.getMonth();
let nextMonth = date.getMonth() +1;

let arrMonths = [prevMonth, month, nextMonth];

let prevMonthCountDays, currentMonthCountDays, nextMonthCountDays;

prevMonthCountDays = new Date(year, month + prevMonth, 0).getDate();
currentMonthCountDays = new Date(year, month + month, 0).getDate();
nextMonthCountDays = new Date(year, month + nextMonth, 0).getDate();

let prevStartMonth = new Date(year, month -1, 1).getDay();
let currentStartMonth = new Date(year, month, 1).getDay();
let nextStartMonth = new Date(year, month +1, 1).getDay();

let prevEndDayOfMonth = new Date(year, month, 0).getDay();
let currentEndDayOfMonth = new Date(year, month +1, 0).getDay();
let nextEndDayOfMonth = new Date(year, month +2, 0).getDay();

let arrCountDays = [prevMonthCountDays, currentMonthCountDays, nextMonthCountDays];
let arrFirstDayOfMonth = [prevStartMonth, currentStartMonth, nextStartMonth];
let arrLastDayOfMonth = [prevEndDayOfMonth, currentEndDayOfMonth, nextEndDayOfMonth];

let day = date.getDay();
function backgroundTimeYear(months) {
    for (let i = 0; i < months.length; i++) {
        if (months[1] == 0 || months[1] == 1 || months[1] == 11) {
            headerBg.dataset.type ="bgZima";
        } else if (months[1] == 2 || months[1] == 3 || months[1] == 4) {
            headerBg.dataset.type ="bgVesna";
        } else if (months[1] == 5 || months[1] == 6 || months[1] == 7 ) {
            headerBg.dataset.type ="bgLeto";
        } else if (months[1] == 8 || months[1] == 9 || months[1] == 10 ) {
            headerBg.dataset.type ="bgOsen";
        }
    }
}

backgroundTimeYear(arrMonths);

nextBtn.addEventListener('click', () => {
    for (let i = 0; i < arrMonths.length; i++) {
        if (arrMonths[i] == 11) {
            year = nextYear(year, arrMonths[2]);
        }
        arrMonths[i] = nextMonths(arrMonths[i]);
        prevMonthCountDays = new Date(year, month + arrMonths[0], 0).getDate();
        currentMonthCountDays = new Date(year, month + arrMonths[1], 0).getDate();
        nextMonthCountDays = new Date(year, month + arrMonths[2], 0).getDate();
        arrCountDays  = [prevMonthCountDays, currentMonthCountDays, nextMonthCountDays]
    }

    showInfo(year, arrMonths, monthTitle, yearTitle);
    drawCalendar(arrCountDays, nextMonth);
    backgroundTimeYear(arrMonths);
});

function nextYear(year, month) {
    if (month == 11) {
        return year + 1;
    } else {
        return year;
    }
}

function nextMonths (month) {
    if (month == 11) {
        return 0;
    } else {
        return month + 1;
    }
}

prevBtn.addEventListener('click', () => {
    for (let i = 0; i < arrMonths.length; i++) {
        if (arrMonths[i] == 0) {
            year = prevYear(year, arrMonths[0]);
        }
        arrMonths[i] = prevMonths(arrMonths[i]);
        prevMonthCountDays = new Date(year, month + arrMonths[0], 0).getDate();
        currentMonthCountDays = new Date(year, month + arrMonths[1], 0).getDate();
        nextMonthCountDays = new Date(year, month + arrMonths[2], 0).getDate();
        arrCountDays  = [prevMonthCountDays, currentMonthCountDays, nextMonthCountDays]
    }

    showInfo(year, arrMonths, monthTitle, yearTitle);
    drawCalendar(arrCountDays, prevMonth);
    backgroundTimeYear(arrMonths);


});

function prevYear(year, month) {
    if (month == 0) {
        return year - 1;
    } else {
        return year;
    }
}

function prevMonths(month) {
    if (month == 0) {
        return 11;
    } else {
        return month - 1;
    }
}

function multiDimensionalArr (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = [];
        for (let k = 1; k <= arr[i]; k++) {
            subArr.push(k);
        }
        newArr.push(subArr);
    }
    return newArr;
}

function getRenderOfMonth(arrDays) {
    let result = [];
    let multiArr = multiDimensionalArr(arrDays);
    multiArr = getFirstWeekDayOfMonthNum(multiArr);
    multiArr = getLastWeekDayOfMonthNum(multiArr);
    for (let i = 0; i < multiArr.length; i++) {
        result.push(weekDays(multiArr[i]));
    }
    return result;
}

function getFirstWeekDayOfMonthNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let elem = 1; elem < arrFirstDayOfMonth[i]; elem++) {
            arr[i].unshift('');
        };
    }

    return arr;
}

function getLastWeekDayOfMonthNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 7 - arrLastDayOfMonth[i]
        for (let j = 0; j < count; j++) {
            arr[i].push('');
        };
    };
    
    return arr;
}

function getMonths(parent, arr, index, currentMonth) {
    let weekShadow = document.createElement('div');
    weekShadow.classList.add('calendar-triple_month__shadow-week');
    parent.innerHTML = '';
    for (let subElems of arr) {
        let week = document.createElement('div');
        week.classList.add('calendar-triple_month-week');
        for (let [key, elem] of subElems.entries()) {
            let weekDay = document.createElement('div');
            weekDay.classList.add('calendar-triple_month-day');
            weekDay.textContent = elem;
            if (key == 5 || key == 6) {
                if (weekDay.innerHTML != '') {
                    weekDay.classList.add('calendar-triple_month-weekend');
                }
            }
            if (currentMonth) {
                if (elem == currentDate && index == 1) {
                    weekDay.classList.add('currentDate');
                    week.append(weekShadow);
                }
            }
            week.append(weekDay);
        }
        parent.append(week);
    }
}


function drawCalendar(arr, currentMonth) {
    let arrMonths = getRenderOfMonth(arr);
    arrMonths.forEach((arrMonth, index) => {
        getMonths(dates[index], arrMonth, index, currentMonth);
    });
}

drawCalendar(arrCountDays, month);

function weekDays (arr) {
    let result  = [];
    let stück = []
    let itemCount = arr.length / 7;
    for (let k = 0; k < itemCount; k++) {
        stück = arr.splice(0, 7);
        result.push(stück);
    }
    return result;
}

function showInfo(year, month, elemMonth, elemYear) {
    for (let i = 0; i < month.length; i++) {
        elemMonth[i].textContent = getNameMonths(month[i]);
    }
    elemYear.textContent = year;
}

showInfo(year,arrMonths, monthTitle, yearTitle)

function getNameMonths(num) {
    let nameMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return nameMonths[num];
}