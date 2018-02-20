module.export = (function () {
    var night = "#191970",
        morning = "#61b2ff",
        day = "#87CEFA",
        evening = "#83a2fa";

    var currentTime = function (h, m, s) {
        var hZero = addZeroBefore(h);
        var mZero = addZeroBefore(m);
        if (s !== undefined){
            var sZero = addZeroBefore(s);
            return  hZero + ":" + mZero + ":" + sZero;
        }
        else {
            return  hZero + ":" + mZero;
        }
    };

    function addZeroBefore(time) {
        return time < 10? "0" + time: time;
    }

    clock1.style.height = window.innerHeight + "px";

    setInterval(function () {
        var now = new Date();
        var hours = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds();
        var block = clock1.querySelector("div");
        block.innerHTML = currentTime(hours, min, sec);

        var bgColor;
        if (0 <= hours && hours < 6 ){
            bgColor = night;
        }
        else if(6 <= hours && hours < 12 ){
            bgColor = morning;
        }
        else if(12 <= hours && hours < 18 ){
            bgColor = day;
        }
        else {
            bgColor = evening;
        }
        clock1.style.backgroundColor = bgColor;

    }, 1000);

})();



