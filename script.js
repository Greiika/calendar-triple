// (function (selector) {
//     initCalendar(document.querySelector(selector));
    
//     function initCalendar(calendar) {
//         let yearTitle = calendar.querySelector('.calendar-triple_header-title h1');
//         let prevBtn = calendar.querySelector('.calendar-triple_month-arrows__prev');
//         let nextBtn = calendar.querySelector('.calendar-triple_month-arrows__next');
    
//         let date = new Date();
//         let showedYear = date.getFullYear();
//         let showedDate = date.getDate();
        
//         let showedMonthPrev = date.getMonth() - 1;
//         let showedMonth = date.getMonth();
//         let showedMonthNext = date.getMonth() + 1;
        
//         let arrMonths = [showedMonthPrev, showedMonth, showedMonthNext];

//         drawCalendar(showedYear, arrMonths, calendar, yearTitle, showedDate, showedMonth);
        
//         prevBtn.addEventListener('click', () => {
//             showedYear = getPrevYear(showedYear, arrMonths[0]);
//             for (let i = 0; i < arrMonths.length; i++) {
//                 arrMonths[i] = getPrevMonth(arrMonths[i]);
//             }
    
//             drawCalendar(showedYear, arrMonths, calendar, yearTitle, showedDate);
//         })
        
//         nextBtn.addEventListener('click', () => {
//             showedYear = getNextYear(showedYear, arrMonths[2]);
//             for (let i = 0; i < arrMonths.length; i++) {
//                 arrMonths[i] = getNextMonth(arrMonths[i]);
//             }
    
//             drawCalendar(showedYear, arrMonths, calendar, yearTitle, showedDate);
//         })
//     }


//     function getPrevYear(year, month) {
//         if (month == 0) {
//             return year - 1;
//         } else {
//             return year;
//         }
//     }

//     function getPrevMonth(month) {
//         if (month == 0) {
//             return 11;
//         } else {
//             return month - 1;
//         }
//     }

//     function getNextYear(year, month) {
//         if (month == 11) {
//             return year + 1;
//         } else {
//             return year;
//         }
//     }

//     function getNextMonth(month) {
//         console.log(month)
//         if (month == 11) {
//             return 0;
//         } else {
//             return month + 1;
//         }
//     }

//     function drawCalendar(year, months, calendar, yearTitle, day, currentMonth) {
//         let dates = calendar.querySelectorAll('.calendar-triple_month');
//         let monthsTitle = document.querySelectorAll('.calendar-triple_month-title');
//         console.log(months)
//         months.forEach((month, index) => {
//             drawDates(year, month, dates[index], index, day, currentMonth);

//             showInfo(year, month, monthsTitle[index], yearTitle);
//         })
//     }

//     function showInfo(year, month, elemMonth, elemYear) {
//         elemMonth.textContent = getNameMonths(month);
//         elemYear.textContent = year;
//     }

    // function getNameMonths(num) {
    //     let nameMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //     return nameMonths[num];
    // }

//     function drawDates(year, month, dates, index, day, currentMonth) {
//         let arr = [];
//         let firstDateOfMonth = 1;
//         let lastDateOfMonth = getLastDayOfMonth(year, month);
//         let unshiftElemsNum = getUnshiftElemsNum(year, month);
//         let pushElemsNum = getPushElemsNum(year, month);
//         arr = createArr(firstDateOfMonth, lastDateOfMonth);
//         arr = unshiftElems(unshiftElemsNum, '', arr);
//         arr = pushElems(pushElemsNum, '', arr);
//         arr = pieceArr(7, arr);

//         createDay(arr, dates, index, day, currentMonth);
//     }

//     function createDay(arr, parent, index, day, currentMonth) {
        // let weekDivShadow = document.createElement('div');
        // weekDivShadow.classList.add('calendar-triple_month__shadow-week');
//         parent.innerHTML = '';
//         for (let [keyMonth, subArr] of arr.entries()) {
//             let weekDiv = document.createElement('div');
//             weekDiv.classList.add('calendar-triple_month-week');
//             for (let [keyDay, elem] of subArr.entries()) {
//                 let div = document.createElement('div');

//                 if (keyDay == 5 || keyDay == 6) {
//                     div.classList.add('calendar-triple_month-weekend');
                    
//                 };
                // if (currentMonth) {
                //     if (elem == day && index == 1) {
                //         weekDiv.append(weekDivShadow)
                //         div.classList.add('currentDate');
                        
                //     }
                // }
//                 div.classList.add('calendar-triple_month-day');
//                 div.textContent = elem;
//                 weekDiv.append(div);
//             }
//             parent.append(weekDiv);
//         }
//     }

//     function createArr(from, to) {
//         let arr = [];
//         for (let i = from; i <= to; i++) {
//             arr.push(i);
//         }

//         return arr;
//     }

//     function unshiftElems(num, elem, arr) {
//         for (let i = 0; i < num; i++) {
//             arr.unshift(elem);
//         }

//         return arr;
//     }

//     function pushElems(num, elem, arr) {
//         for (let i = 0; i < num; i++) {
//             arr.push(elem);
//         }

//         return arr;
//     }

//     function getLastDayOfMonth(year, month) {
//         let date = new Date(year, month + 1, 0);
//         return date.getDate();
//     }

//     function getUnshiftElemsNum(year, month) {
//         let jsDayNum = getFirstWeekDayOfMonthNum(year, month);
//         let realDayNum = getRealDayOfWeekNum(jsDayNum);

//         return realDayNum - 1;
//     }

//     function getPushElemsNum(year, month) {
//         let jsDayNum = getLastWeekDayOfMonthNum(year, month);
//         let realDayNum = getRealDayOfWeekNum(jsDayNum);

//         return 7 - realDayNum;
//     }

//     function pieceArr(num, arr) {
//         let result = [];
//         let piece = [];
//         let iterCount = arr.length / num;

//         for (let i = 0; i < iterCount; i++) {
//             piece = arr.splice(0, num);
//             result.push(piece);
//         }

//         return result;
//     }

//     function getRealDayOfWeekNum(jsNumOfDay) {
//         if (jsNumOfDay == 0) {
//             return 7;
//         } else {
//             return jsNumOfDay;
//         }
//     }

//     function getFirstWeekDayOfMonthNum(year, month) {
//         let date = new Date(year, month, 1);
//         return date.getDay();
//     }

//     function getLastWeekDayOfMonthNum(year, month) {
//         let date = new Date(year, month + 1, 0);
//         return date.getDay();
//     }

// }('.calendar-triple'));


let calendar = document.querySelector('.calendar-triple');
let dates = calendar.querySelectorAll('.calendar-triple_month');
let monthTitle = calendar.querySelectorAll('.calendar-triple_month-title');
let yearTitle = calendar.querySelector('.calendar-triple_header-title h1');

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

nextBtn.addEventListener('click', () => {
    year = nextYear(year, arrMonths[2]);
    // if (arrMonths[2] == 11 && arrMonths[1] == 10) {
    //     year = nextYear(year, arrMonths[2]);
    // }
    for (let i = 0; i < arrMonths.length; i++) {
        arrMonths[i] = nextMonths(arrMonths[i]);
        prevMonthCountDays = new Date(year, month + arrMonths[0], 0).getDate();
        currentMonthCountDays = new Date(year, month + arrMonths[1], 0).getDate();
        nextMonthCountDays = new Date(year, month + arrMonths[2], 0).getDate();
        arrCountDays  = [prevMonthCountDays, currentMonthCountDays, nextMonthCountDays]
    }

    showInfo(year, arrMonths, monthTitle, yearTitle);
    drawCalendar(arrCountDays, month)

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
    year = prevYear(year, arrMonths[0]);
    // if (arrMonths[2] == 0 && arrMonths[1] == 11) {
    //     year = prevYear(year, arrMonths[2]);
    // }
    for (let i = 0; i < arrMonths.length; i++) {
        arrMonths[i] = prevMonths(arrMonths[i]);
        prevMonthCountDays = new Date(year, month + arrMonths[0], 0).getDate();
        currentMonthCountDays = new Date(year, month + arrMonths[1], 0).getDate();
        nextMonthCountDays = new Date(year, month + arrMonths[2], 0).getDate();
        arrCountDays  = [prevMonthCountDays, currentMonthCountDays, nextMonthCountDays]
    }

    showInfo(year, arrMonths, monthTitle, yearTitle);
    console.log(month)
    drawCalendar(arrCountDays, month)

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
                console.log(currentMonth)
                if (elem == currentDate && index == 1 ) {
                    week.append(weekShadow);
                    weekDay.classList.add('currentDate');
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