window.onload = function() {
  createTable(table_data);	


};


function createTable(data) {
	var tableDiv = document.getElementById('tableDiv');

	var table = document.createElement('TABLE');
	var tableBody = document.createElement('TBODY');

	table.appendChild(tableBody);

	var dataSize = data.length;

	for(var i = 0; i < dataSize; i++) {
		var tableRow = document.createElement('TR');
		tableBody.appendChild(tableRow);

		var firstName = document.createElement('TD');
		firstName.innerHTML = data[i].first_name;
		tableRow.appendChild(firstName);

		var lastName = document.createElement('TD');
		lastName.innerHTML = data[i].last_name;
		tableRow.appendChild(lastName);

		var homeLocation = document.createElement('TD');
		homeLocation.innerHTML = data[i].home;
		tableRow.appendChild(homeLocation);
	}

	tableDiv.appendChild(table);
};



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