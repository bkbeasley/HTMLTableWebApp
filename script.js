window.onload = function() {
  createTable(table_data);
};

/* This function dynamically generates and inserts an HTML table into the DOM
   
   data: data structure containing sample data to populate the table
   customElementId: default parameter containing the id of the element the table 
   is inserted into
*/
function createTable(data, customElementId) {
	
	// The element the table is inserted into
	var insertionElement;

	// If no element id is provided, use the default tableDiv id
	if(customElementId === undefined) {
		insertionElement = document.getElementById('tableDiv');
	}
	else {
		insertionElement = document.getElementById(customElementId);
	}

	// Make the table responsive
	var tableDiv = document.getElementById('tableDiv');
	tableDiv.style.overflowX = "auto";


	// Create a table and add styling to it
	var table = document.createElement('TABLE');
	table.border = "2px";
	table.style.width = "100%";
	table.style.borderCollapse = "collapse";


	// Add a header to the table
	var tableHeader = document.createElement('THEAD');
	table.appendChild(tableHeader);


	// Create a header row and header cells
	var headerRow = document.createElement('TR');
	var firstNameHeader = document.createElement('TH');
	var lastNameHeader = document.createElement('TH');
	var homeHeader = document.createElement('TH');

	// Populate the header row
	tableHeader.appendChild(headerRow);
	firstNameHeader.innerHTML = "First Name";
	lastNameHeader.innerHTML = "Last Name";
	homeHeader.innerHTML = "Home";

	headerRow.appendChild(firstNameHeader);
	headerRow.appendChild(lastNameHeader);
	headerRow.appendChild(homeHeader);


	// Create a table body
	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);

	// Store the size of the sample data
	var dataSize = data.length;

	// Create a stylized 3x3 table using data from the array passed
	for(var i = 0; i < dataSize; i++) {
		var tableRow = document.createElement('TR');
		tableBody.appendChild(tableRow);

		var firstName = document.createElement('TD');
		firstName.style.padding = "5px";
		firstName.innerHTML = data[i].first_name;
		tableRow.appendChild(firstName);

		var lastName = document.createElement('TD');
		lastName.style.padding = "5px";
		lastName.innerHTML = data[i].last_name;
		tableRow.appendChild(lastName);

		var homeLocation = document.createElement('TD');
		homeLocation.style.padding = "5px";
		homeLocation.innerHTML = data[i].home;
		tableRow.appendChild(homeLocation);
	}

	// Add the table to the insertionElement node
	insertionElement.appendChild(table);
};


// Data structure containing sample data for the dynamic table
var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];