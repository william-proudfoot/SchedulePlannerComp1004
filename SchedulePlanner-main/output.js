document.getElementById("saveJsonButton").addEventListener("click", function() {
    // Retrieve the table data
    var tableData = retrieveTableData();

    // Format the table data to match the desired structure
    var formattedData = formatTableData(tableData);

    // Convert the formatted data into a JSON string
    var jsonData = JSON.stringify(formattedData, null, 2);

    // Retrieve the file name from the input field
    var fileName = document.getElementById("fileOutput").value.trim();

    // Validate the file name
    if (!isValidFileName(fileName)) {
        alert("Please enter a valid file name.");
        return;
    }

    // Save the JSON data to the file
    saveJsonToFile(jsonData, fileName);
});

function retrieveTableData() {
    var tableData = [];
    var rows = document.querySelectorAll("table tr");
    rows.forEach(function(row, rowIndex) {
        var rowData = {};
        var cells = row.querySelectorAll("td");
        cells.forEach(function(cell, cellIndex) {
            var day = cell.getAttribute("data-day");
            var time = cell.getAttribute("data-time");
            var activityType = cell.textContent.trim();
            if (activityType !== "") {
                rowData[day] = rowData[day] || {};
                rowData[day][time] = activityType;
            }
        });
        tableData.push(rowData);
    });
    return tableData;
}

function isValidFileName(fileName) {
    // Add your validation logic for file names here
    return fileName !== "";
}

function saveJsonToFile(jsonData, fileName) {
    // Convert JSON data to Blob object
    var blob = new Blob([jsonData], { type: "application/json" });

    // Create a link element
    var link = document.createElement("a");

    // Set the download attribute and file name
    link.download = fileName.endsWith(".json") ? fileName : fileName + ".json";

    // Set the URL of the Blob
    link.href = URL.createObjectURL(blob);

    // Click the link to trigger the download
    link.click();
}

function formatTableData(tableData) {
    var formattedData = [];
    tableData.forEach(function(rowData) {
        for (var day in rowData) {
            if (rowData.hasOwnProperty(day)) {
                for (var time in rowData[day]) {
                    if (rowData[day].hasOwnProperty(time)) {
                        formattedData.push({
                            "Day": day,
                            "Time": time,
                            "Type": rowData[day][time]
                        });
                    }
                }
            }
        }
    });
    return { "activities": formattedData };
}