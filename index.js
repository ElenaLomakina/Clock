require("./CSS/clock.css");

var clock = require("./JS/clock");
var events = require("./JS/events");

clock.tick(function (date) {
    clock.update(date);
    events.update(date);
});