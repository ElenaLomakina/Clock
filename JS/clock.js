var timeLib = require("./lib/time");

module.exports.tick = function (cb) {
    setInterval(function () {
        cb(new Date());
    }, 1000);
};

module.exports.update = function (date) {
    var night = "#191970",
        morning = "#61b2ff",
        day = "#87CEFA",
        evening = "#83a2fa";

    clock1.style.height = window.innerHeight + "px";
    var hours = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var block = clock1.querySelector("div");
    block.innerHTML = timeLib.currentTime(hours, min, sec);

    var bgColor;
    if (0 <= hours && hours < 6) {
        bgColor = night;
    }
    else if (6 <= hours && hours < 12) {
        bgColor = morning;
    }
    else if (12 <= hours && hours < 18) {
        bgColor = day;
    }
    else {
        bgColor = evening;
    }
    clock1.style.backgroundColor = bgColor;

};
