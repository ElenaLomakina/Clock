var timeLib = require("./lib/time");
function Item(from, to, task) {
    this.from = from;
    this.to = to;
    this.task = task;
}

var button = document.getElementById("add-task");
var myForm = document.getElementById("new-task");
var addSubmit = myForm.elements.add;

var taskList = [];


button.addEventListener("click", function () {
    myForm.classList.remove("hidden");
    myForm.classList.add("open");
});

addSubmit.addEventListener("click", function (e) {
    if (validateForm(e)) {
        addToTaskList();
        e.preventDefault();
        myForm.classList.remove("open");
        myForm.classList.add("hidden");
        myForm.reset();
    }
});

function validateForm(e) {
    var isValid = true,
        from = myForm.elements.start.value,
        to = myForm.elements.end.value,
        title = myForm.elements.title.value;
    if (from >= to) {
        isValid = false;
        alert("Field 'to' must be bigger then field 'from'");
    }
    if (from.length === 0 || to.length === 0 || title.length === 0) {
        isValid = false;
        alert("All fields must be filled");
    }
    if (!isValid) {
        e.preventDefault();
    }
    return isValid;
}

function addToTaskList() {
    var from = myForm.elements.start.value,
        to = myForm.elements.end.value,
        title = myForm.elements.title.value;

    var taskItem = new Item(from, to, title);
    taskList.push(taskItem);

    taskList.sort(function compareStart(a, b) {
        if (a.from > b.from) {
            return 1;
        }
        if (a.from < b.from) {
            return -1;
        }
        return 0;
    });
    var index = taskList.indexOf(taskItem);

    var listItem = document.createElement("li");
    listItem.innerHTML = from + "-" + to + "   " + title;
    tasks.insertBefore(listItem, tasks.children[index]);
    taskItem.li = listItem;
}

module.exports.Item = Item;

module.exports.update = function (date) {
    var hours = date.getHours(),
        min = date.getMinutes();
    var currTime = timeLib.currentTime(hours, min);
    var currentTask = document.getElementById("current-task");

    var activeTask = taskList.find(function (value) {
        if (currTime === value.from) { return true; }
    });
    var inactiveTask = taskList.find(function (value) {
        if (currTime === value.to) { return true; }
    });

    if (activeTask) {
        currentTask.appendChild(activeTask.li);
    }

    if (inactiveTask) {
        currentTask.removeChild(inactiveTask.li);
        taskList.shift();
    }
};
