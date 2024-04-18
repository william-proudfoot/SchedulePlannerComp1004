document.getElementById("addActivityButton").addEventListener("click", function() {
    // Retrieve user inputs
    var day = document.getElementById("dayInput").value;
    var time = document.getElementById("timeInput").value;
    var activityType = document.getElementById("activityInput").value;

    // Validate inputs
    if (!isValidDay(day)) {
        alert("Please enter a valid day of the week (e.g., Monday).");
        return;
    }

    if (!isValidTime(time)) {
        alert("Please enter a valid time (e.g., 9:00).");
        return;
    }

    if (!isValidActivity(activityType)) {
        alert("Please enter a valid activity type.");
        return;
    }
	
    // Add the data to the table
    addDataToTable(day, time, activityType);

    // Clear the input fields
    document.getElementById("dayInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("activityInput").value = "";
});

function isValidDay(day) {
    var validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return validDays.includes(day);
}

function isValidTime(time) {
    var pattern = /^(?:[0-9]|1[0-9]):[0-5][0-9]$/;
    return pattern.test(time);
}

function isValidActivity(activityType) {
    return activityType.trim() !== "";
}

function addDataToTable(day, time, activityType) {
    // Find the cell corresponding to the given day and time
    var cell = document.querySelector('td[data-day="' + day + '"][data-time="' + time + '"]');
    if (!cell) {
        alert("Could not find a cell for the specified day and time.");
        return;
    }

    // Add the activity type to the cell
    cell.textContent = activityType;
}

document.getElementById("removeActivityButton").addEventListener("click", function() {
	var day = document.getElementById("dayInput").value;
    	var time = document.getElementById("timeInput").value;
    	var activityType = document.getElementById("activityInput").value;

       	if (!isValidDay(day)) {
        	alert("Please enter a valid day of the week (e.g., Monday).");
        	return;
    	}

    	if (!isValidTime(time)) {
        	alert("Please enter a valid time (e.g., 9:00).");
        	return;
    	}
	
	var cell = document.querySelector('td[data-day="' + day + '"][data-time="' + time + '"]');
    	if (!cell) {
        	alert("Could not find a cell for the specified day and time.");
        	return;
    	}

    	cell.textContent = "";
	document.getElementById("dayInput").value = "";
    	document.getElementById("timeInput").value = "";
    	document.getElementById("activityInput").value = "";
});