const MONTH_OF_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WEEKEND = [5, 6];
const YEAR_OF_MONTH = 12;
const DAY_OF_WEEK = 7;

/**
 * 
 * @param {number} day 해당 월의 시작 요일
 * @param {number} k 날짜
 * @returns {number} 해당 날짜의 요일
 */
function getDayOfTheWeek(day, k) {
    return (day + k - 1) % DAY_OF_WEEK;
}

/**
 * 
 * @param {number} day 현재 월의 시작 요일
 * @param {number} month 현재 월
 * @returns {number} 다음 월의 시작 요일
 */
function getNextStartDay(day, month) {
    return (day + MONTH_OF_DAYS[month]) % DAY_OF_WEEK;
}

function solution(day, k) {
    const answer = [];

    for (let i = 0; i < YEAR_OF_MONTH; i++) {
        WEEKEND.includes(getDayOfTheWeek(day, k)) ? answer.push(1) : answer.push(0);
        day = getStartDay(day, i);
    }

    return answer;
}