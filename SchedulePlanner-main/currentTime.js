	var currentDate = new Date();
	var currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
	var currentHour = currentDate.getHours();
	if (currentHour > 20) {
	    currentHour = -1;
	}
	currentHour = currentHour % 12 || 12;

	var currentCell = document.querySelector('td[data-day="' + currentDay + '"][data-time="' + currentHour + ':00"]');
	var allCells = document.querySelectorAll('td');

	if (currentCell) {
	    currentCell.style.backgroundColor = "yellow"; // Example color
	}