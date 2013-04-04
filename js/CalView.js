function renderCalendar(today, selected){
	var month = $('#month-selector').text();
	var year =  $('#year-selector').text();
	console.log(Date.parse(month + ' ' + year));
	
	var date = Date.parse(month + ' ' + year).moveToLastDayOfMonth();
	var days = parseInt(date.toString('d'));
	date = date.moveToFirstDayOfMonth();
	var dayOfWeek = date.getDay();
	if (today != 0)
		date = Date.today();
	else
		date = Date.parse(month + ' ' + year);
	var calendar = '<tr>';
	for (var i = 0; i < dayOfWeek; i++){
		calendar += '<td></td>';
	}
	for (var k = 1; k <= days; k++){
		calendar += '<td class="';
		if (k == today && k == selected)
			calendar += 'today selected ';
		else if (k == today)
			calendar += 'today ';
		else if (k == selected)
			calendar += 'selected ';
		calendar += 'day">';
		calendar += k;
		calendar += '</td>';
		i++;
		if (i == 7){
			i = 0;
			calendar += '</tr>';
		}
	}
	
	while (i != 7){
		calendar += '<td></td>';
		i++;
	}
	calendar += '</tr>';
	
	$('#calendar').html(calendar);
	
	$('td.day').one('click', function(event){
		var target = $(event.currentTarget);
		var today = $('.today').text();
		var selected = target.text();
		renderCalendar(today, selected);
	});
}