var addZeroBefore = function(time) {
    return time < 10 ? "0" + time : time;
};

var currentTime = function (h, m, s) {
    var hZero = addZeroBefore(h);
    var mZero = addZeroBefore(m);
    if (s !== undefined) {
        var sZero = addZeroBefore(s);
        return hZero + ":" + mZero + ":" + sZero;
    }
    else {
        return hZero + ":" + mZero;
    }
};


module.exports.currentTime = currentTime;
module.exports.addZeroBefore = addZeroBefore;

// можно так:
// module.exports = {
//     currentTime: currentTime,
//     addZeroBefore: addZeroBefore
// };