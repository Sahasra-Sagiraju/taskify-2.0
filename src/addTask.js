const moment = require("moment");
import { DoughnutController } from "chart.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", "[]");
}

const addTaskContainer = document.querySelector(".addtask-container");
const inputTaskName = document.querySelector("#tname");
const inputDesc = document.querySelector("#desc");
const inputSubTask = document.querySelector("#subtask");
const inputStartDate = document.querySelector("#sdate");
const inputEndDate = document.querySelector("#edate");
const inputCustomCategory = document.querySelector("#customc");
const btnAddTask = document.querySelector("#addb");
const priorityDiv = document.querySelector(".priority");
const priorityRadioArray = Array.from(document.querySelectorAll(".prb"));
const priorityDatePicker = document.querySelector(".priority-date-picker");
const recurringPeriodArray = Array.from(document.querySelectorAll(".rpc"));
const infoSubtaskEntity = document.querySelector(".info-subtask");
const durationType = document.querySelector("#priority");
const inputProgressType = document.querySelector(".progress-type__value");
const progressTypeAdditionalInfoDiv = document.querySelector(
  ".progress-type__additional-info"
);
const inputGraphTypeDiv = document.querySelector(".graph-type");
const inputGraphType = document.querySelector(".graph-type__value");
const inputAcceptedDeviationDiv = document.querySelector(".accepted-deviation");

tippy(".info-subtask", {
  content: "To add multiple subtasks, separate them with commas",
  placement: "top-start",
  arrow: true,
  animation: "shift-away-subtle",
  theme: "light",
});

let taskName = "";
let taskDesc = "";
let subTask = "";
let startDate = "";
let endDate = "";
let pickedFirstStartDate = "";
let pickedSecondStartDate = "";
let customCategory = "";
let priority = "";
let duration = "";
let progressEachDay = {};
let progressType = "default";
let time = "";
let targetPercentage = NaN;
let targetNoOfDays = NaN;
let progressNumberStart = NaN;
let progressNumberEnd = NaN;
let graphType = "default";
let acceptedDeviation = "";
let dichotomousTypeTarget = "default";

inputStartDate.setAttribute(
  "min",
  `${moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD")._i}`
);
inputEndDate.setAttribute(
  "min",
  `${moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD")._i}`
);

function getMonthlyDates(pickedFirstStartDate, endDate) {
  const startMoment = moment(pickedFirstStartDate);
  const endMoment = moment(endDate);

  let monthlyDates = [];

  while (!startMoment.isAfter(endMoment)) {
    const lastDayOfMonth = startMoment.endOf("month").format("DD-MM-YYYY");
    monthlyDates.push(lastDayOfMonth);

    startMoment.add(1, "month");
  }

  return monthlyDates;
}

const resetForm = () => {
  inputTaskName.value = "";
  inputDesc.value = "";
  inputSubTask.value = "";
  inputStartDate.value = "";
  inputEndDate.value = "";
  inputCustomCategory.value = "";
  inputProgressType.value = "default";
  inputGraphType.value = "default";
  priorityRadioArray.map((element) => (element.checked = false));
  recurringPeriodArray.map((element) => (element.checked = false));
  durationType.value = "";

  taskName = "";
  taskDesc = "";
  subTask = "";
  startDate = "";
  endDate = "";
  pickedFirstStartDate = "";
  pickedSecondStartDate = "";
  customCategory = "";
  priority = "";
  duration = "";
  progressNumberStart = NaN;
  progressNumberEnd = NaN;
  targetPercentage = NaN;
  targetNoOfDays = NaN;
  acceptedDeviation = "";
  dichotomousTypeTarget = "default";

  priorityDatePicker.innerHTML = "";

  Object.keys(progressEachDay).forEach((key) => {
    delete object[key];
  });

  alert("task added!");
};

inputProgressType.addEventListener("change", (event) => {
  inputAcceptedDeviationDiv.innerHTML = "";
  progressType = inputProgressType.value;
  progressTypeAdditionalInfoDiv.innerHTML = "";
  if (progressType === "time") {
    document.querySelector(".graph-type").removeAttribute("hidden");
    progressTypeAdditionalInfoDiv.insertAdjacentHTML(
      "beforeend",
      `<label for="time">Choose a time: </label>
       <input id="time" class="time" type="time" required />
      `
    );
    const inputTime = document.querySelector(".time");
    inputTime.addEventListener("change", () => {
      time = inputTime.value;
    });
  } else if (progressType === "number") {
    document.querySelector(".graph-type").removeAttribute("hidden");
    progressTypeAdditionalInfoDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="number-range" style="display: flex; gap: 20px;">
        <div>
          <label for="start-number">Choose start number: </label>
          <input class="start-number" style="width:80px; padding: 5px 10px;" id="start-number" type="number" min=0 required />
        </div>
        <div class="end-number">
          <label for="end-number">Choose end number: &nbsp;</label>
          <input class="end-number" style="width: 80px; padding: 5px 10px;" id="end-number" type="number" min=0 required />
        </div>
      </div>
      `
    );
    const numberRange = document.querySelector(".number-range");
    numberRange.addEventListener("change", (event) => {
      if (event.target.value < 0) {
        event.target.value = "0";
      }
      const numberType = event.target.classList[0];
      if (numberType === "start-number") {
        progressNumberStart = Number(event.target.value);
      } else {
        progressNumberEnd = Number(event.target.value);
      }
    });
  } else if (progressType === "percentage") {
    document.querySelector(".graph-type").removeAttribute("hidden");
    progressTypeAdditionalInfoDiv.insertAdjacentHTML(
      "beforeend",
      `<label for="target-percentage">Choose target percentage: </label>
       <input id="target-percentage" class="target-percentage__value" style="width:80px; padding: 5px 10px;" type="number" required />
      `
    );
    document
      .querySelector(".target-percentage__value")
      .addEventListener("change", (event) => {
        if (event.target.value < 0) {
          event.target.value = "0";
        } else if (event.target.value > 100) {
          event.target.value = "100";
        }
        targetPercentage = Number(event.target.value);
      });
  } else if (progressType === "dichotomous") {
    progressTypeAdditionalInfoDiv.insertAdjacentHTML(
      "beforeend",
      `<label for="target-no-of-days">Select target: </label>
       <select id="target-no-of-days" class="target-no-of-days__value">
        <option value="default">Select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>
      `
    );
    document.querySelector(".graph-type").setAttribute("hidden", "true");
    document
      .querySelector(".target-no-of-days__value")
      .addEventListener("change", (event) => {
        dichotomousTypeTarget = event.target.value;
      });
  }
});

inputGraphType.addEventListener("change", (event) => {
  graphType = event.target.value;
  console.log(graphType);
});

priorityDiv.addEventListener("change", (event) => {
  priorityDatePicker.innerHTML = "";

  const priority = event.target.value;
  console.log(priority);
  switch (priority) {
    case "weekly": {
      const date = new Date(startDate);
      const lastDate = new Date(startDate);
      if (startDate === "") {
        alert("Please pick start date and end date for this task first");
        event.target.checked = false;
        return;
      }
      lastDate.setDate(lastDate.getDate() + 7);
      const formattedStartDate = date.toISOString().split("T")[0];
      const formattedLastDate = lastDate.toISOString().split("T")[0];
      priorityDatePicker.insertAdjacentHTML(
        "beforeend",
        `<label for="priority-date-picker__input">Pick a date:
                  <input
                    id="priority-date-picker__input"
                    type="date"
                    min=${formattedStartDate}
                    max=${formattedLastDate}
                /></label>`
      );
      return;
    }
    case "biweekly": {
      const date = new Date(startDate);
      const lastDate = new Date(startDate);
      if (startDate === "") {
        alert("Please pick start date and end date for this task first");
        event.target.checked = false;
        return;
      }
      lastDate.setDate(lastDate.getDate() + 7);

      const formattedStartDate = date.toISOString().split("T")[0];
      const formattedLastDate = lastDate.toISOString().split("T")[0];
      priorityDatePicker.insertAdjacentHTML(
        "beforeend",
        `<label for="priority-date-picker__input">Pick first date:
                  <input
                    id="priority-date-picker__input"
                    type="date"
                    min=${formattedStartDate}
                    max=${formattedLastDate}
                /></label>
          <label for="priority-date-picker__input">Pick second date:</label>
          <input
            id="priority-date-picker__input-1"
            type="date"
            min=${formattedStartDate}
            max=${formattedLastDate}
        /></label>`
      );
      return;
    }
    case "monthly": {
      const date = new Date(startDate);
      const lastDate = new Date(startDate);
      if (startDate === "") {
        alert("Please pick start date and end date for this task first");
        event.target.checked = false;
        return;
      }
      lastDate.setMonth(date.getMonth() + 1);
      lastDate.setDate(date.getDate() - 1);
      const formattedStartDate = date.toISOString().split("T")[0];
      const formattedLastDate = lastDate.toISOString().split("T")[0];
      priorityDatePicker.insertAdjacentHTML(
        "beforeend",
        `<label for="priority-date-picker__input">Pick a date:
                  <input
                    id="priority-date-picker__input"
                    type="date"
                    min=${formattedStartDate}
                    max=${formattedLastDate}
                /></label>`
      );
      return;
    }
  }
});

const getMinDate = (date1, date2) => {
  if (date1 < date2) {
    return date1;
  } else {
    return date2;
  }
};

btnAddTask.addEventListener("click", () => {
  taskName = inputTaskName.value;
  taskDesc = inputDesc.value;
  subTask = inputSubTask.value;
  startDate = inputStartDate.value;
  endDate = inputEndDate.value;
  customCategory = inputCustomCategory.value;
  priority = priorityRadioArray.find((element) => element.checked).value;
  progressType = inputProgressType.value;
  if (progressType === "default") {
    alert("Please select a progress type");
  }
  if (graphType === "default") {
    alert("Please select a graph type");
  }
  if (
    progressType === "number" &&
    (progressNumberStart === undefined || progressNumberEnd === undefined)
  ) {
    alert("Please fill the number range input");
  } else if (
    progressType === "number" &&
    progressNumberStart > progressNumberEnd
  ) {
    alert(
      "Please select appropriate number range with start number less than end number"
    );
  }
  const recurringPeriod = recurringPeriodArray.find(
    (element) => element.checked
  ).value;
  const duration = durationType.value;

  const progressEachDay = {};
  switch (priority) {
    case "daily":
      let date = moment(
        moment(startDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );

      console.log(date);
      console.log(lastDate);

      while (date.isSameOrBefore(lastDate)) {
        progressEachDay[date.format("DD/MM/YYYY")] = 0;
        date.add(1, "days");
      }
      break;
    case "weekly": {
      let date = moment(
        moment(pickedFirstStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      while (date.isSameOrBefore(lastDate)) {
        progressEachDay[date.format("DD/MM/YYYY")] = 0;
        date.add(7, "days");
      }
      break;
    }
    case "biweekly": {
      let firstDate = moment(
        moment(pickedFirstStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let secondDate = moment(
        moment(pickedSecondStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      while (firstDate.isSameOrBefore(lastDate)) {
        progressEachDay[firstDate.format("DD/MM/YYYY")] = 0;
        firstDate.add(7, "days");
      }
      while (secondDate.isSameOrBefore(lastDate)) {
        progressEachDay[secondDate.format("DD/MM/YYYY")] = 0;
        secondDate.add(7, "days");
      }
      break;
    }
    case "monthly": {
      const dates = getMonthlyDates(pickedFirstStartDate, endDate);
      dates.forEach((date) => (progressEachDay[date] = 0));
      break;
    }
    default:
      console.log("Something went wrong!");
  }

  const newTask = {
    taskName,
    taskDesc,
    subTask,
    startDate,
    endDate,
    customCategory,
    priority,
    recurringPeriod,
    duration,
    progressType,
    progressEachDay: { ...progressEachDay },
  };
  console.log(newTask);

  const temp = JSON.parse(localStorage.getItem("tasks"));
  temp.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(temp));
  resetForm();
});

const formDiv = document.querySelector(".form-custom");
formDiv.addEventListener("change", (event) => {
  if (event.target.getAttribute("type") === "date") {
    const date = event.target;
    if (date.getAttribute("id") === "sdate") {
      startDate = inputStartDate.value;
    } else {
      endDate = inputEndDate.value;
    }
  }
});

priorityDatePicker.addEventListener("change", () => {
  const datePickerArray = Array.from(priorityDatePicker.children).map(
    (labelChild) => Array.from(labelChild.children)[0]
  );
  console.log(datePickerArray);
  if (datePickerArray.length === 1) {
    pickedFirstStartDate = datePickerArray[0].value;
  } else {
    console.log("I'm here");
    pickedFirstStartDate = datePickerArray[0].value;
    pickedSecondStartDate = datePickerArray[1].value;
  }
});

const getProgressEachDayObj = (priority) => {
  console.log(priority);
  const progressEachDay = {};
  switch (priority) {
    case "daily":
      let date = moment(
        moment(startDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );

      console.log(date);
      console.log(lastDate);

      while (date.isSameOrBefore(lastDate)) {
        progressEachDay[date.format("DD/MM/YYYY")] = 0;
        date.add(1, "days");
      }
      break;
    case "weekly": {
      let date = moment(
        moment(pickedFirstStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      while (date.isSameOrBefore(lastDate)) {
        progressEachDay[date.format("DD/MM/YYYY")] = 0;
        date.add(7, "days");
      }
      break;
    }
    case "biweekly": {
      let firstDate = moment(
        moment(pickedFirstStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let secondDate = moment(
        moment(pickedSecondStartDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      let lastDate = moment(
        moment(endDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
        "DD/MM/YYYY"
      );
      while (firstDate.isSameOrBefore(lastDate)) {
        progressEachDay[firstDate.format("DD/MM/YYYY")] = 0;
        firstDate.add(7, "days");
      }
      while (secondDate.isSameOrBefore(lastDate)) {
        progressEachDay[secondDate.format("DD/MM/YYYY")] = 0;
        secondDate.add(7, "days");
      }
      break;
    }
    case "monthly": {
      const dates = getMonthlyDates(pickedFirstStartDate, endDate);
      dates.forEach((date) => (progressEachDay[date] = 0));
      break;
    }
    default:
      console.log("Something went wrong!");
  }
};

const validateProgressInfo = (progressType) => {
  switch (progressType) {
    case "percentage": {
      if (isNaN(targetPercentage)) {
        return false;
      }
      return true;
    }
    case "number": {
      if (isNaN(progressNumberStart) || isNaN(progressNumberEnd)) {
        return false;
      }
      if (progressNumberStart > progressNumberEnd) {
        progressNumberEnd = NaN;
        document.querySelector("#end-number").value = "";
        alert("'progressNumberEnd' must be greater than 'progressNumberStart'");
        return false;
      }
      return true;
    }
    case "dichotomous": {
      if (dichotomousTypeTarget === "default") {
        return false;
      }
      return true;
    }
    case "time": {
      if (time === "") {
        return false;
      }
      return true;
    }
  }
};

const renderAcceptedDeviationHTML = (progressType, graphType) => {
  switch (progressType) {
    case "percentage": {
      let max = 0;
      switch (graphType) {
        case "increase": {
          max = targetPercentage;
          break;
        }
        default: {
          max = 100 - Number(targetPercentage);
        }
      }
      console.log(`Max: ${max}`);
      inputAcceptedDeviationDiv.insertAdjacentHTML(
        "beforeend",
        `<label for="accepted-deviation__id">Accepted deviation: </label>
        <input id="accepted-deviation__id" style="width:80px; padding: 5px 10px;" class="accepted-deviation__value" type="number" min=0 />`
      );
      const temp = document.querySelector(".accepted-deviation__value");
      temp.value = acceptedDeviation === "" ? "" : acceptedDeviation;
      temp.addEventListener("change", (event) => {
        if (event.target.value !== "") {
          if (Number(event.target.value) < 0) event.target.value = "0";
          else if (Number(event.target.value) > max) event.target.value = max;
        }
        acceptedDeviation = event.target.value;
        console.log(acceptedDeviation);
      });
      return;
    }
    case "number": {
    }
    case "dichotomous": {
      console.log(getProgressEachDayObj(priority).length);
      inputAcceptedDeviationDiv.insertAdjacentHTML(
        "beforeend",
        `<label for="accepted-deviation__id">Accepted deviation: </label>
        <input id="accepted-deviation__id" style="width:80px; padding: 5px 10px;" class="accepted-deviation__value" type="number" min=0 max=${
          getProgressEachDayObj(priority).length
        } />`
      );
    }
    case "time": {
    }
  }
};

addTaskContainer.addEventListener("change", (event) => {
  console.log(inputGraphTypeDiv.hasAttribute("hidden"));
  console.log(
    !inputGraphTypeDiv.hasAttribute("hidden") && graphType !== "default"
  );
  if (
    progressType !== "default" &&
    (inputGraphTypeDiv.hasAttribute("hidden") ||
      (!inputGraphTypeDiv.hasAttribute("hidden") && graphType !== "default")) &&
    validateProgressInfo(progressType)
  ) {
    console.log("Hi I'm here");
    inputAcceptedDeviationDiv.innerHTML = "";
    renderAcceptedDeviationHTML(progressType, graphType);
  }
});
