/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    daysBetnD1D2 = Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
    return daysBetnD1D2;
};
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));