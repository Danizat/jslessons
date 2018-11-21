var SECOND = 1000;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;

function get1Header() {
    var h = document.getElementById("header");
    return h;
}

function printTimer() {
    console.log("Hello!");
}

// 15 days 20 hours 15 munutes 24 seconds
//
function leftNY() {
    var now = new Date();
    var ny = new Date(2019, 0);
    var delta = ny.getTime() - now.getTime();

    var days_count = Math.floor(delta / DAY);
    delta -= days_count * DAY;
    var hours_count = Math.floor(delta / HOUR);
    delta -= hours_count * HOUR;
    var minutes_count = Math.floor(delta / MINUTE);
    delta -= minutes_count * MINUTE;
    var seconds_count = Math.floor(delta / SECOND);

    return (
        days_count +
        " days " +
        hours_count +
        " hours " +
        minutes_count +
        " minutes " +
        seconds_count +
        " seconds"
    );
}

console.log(leftNY());

// printTimer();