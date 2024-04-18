document.getElementById("loadJsonButton").addEventListener("click", function() {
    // Get the file path entered by the user
    var filePath = document.getElementById("fileInput").value;
    
    // Make a fetch request to load the JSON file
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error: Unable to load JSON file. Status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Loop through the activities and populate the table
            data.activities.forEach(function(activity) {
                // Find the cell corresponding to the day and time of the activity
                var cell = document.querySelector("td[data-day='" + activity.Day + "'][data-time='" + activity.Time + "']");
                if (cell) {
                    // Populate the cell with the activity type
                    cell.innerText = activity.Type;
                }
            });
        })

        .catch(error => {
            // Handle errors
            alert(error.message + "\nPlease check your file name is correct and in the same folder as index.html");
        });
});
