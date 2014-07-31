Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function parseDate(date) {
	var parts = date.split("/");
	return new Date(parseInt(parts[2], 10),
			parseInt(parts[1], 10) - 1,
			parseInt(parts[0], 10));
}

function calculateMonthsBetweenDates(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    if (d2.getDate() < d1.getDate())
	months -= 1;
    return months <= 0 ? 0 : months;
}

function calculateDaysBetweenDates(d1, d2) {
    if (d2.getDate() >= d1.getDate())
	return d2.getDate() - d1.getDate();

    var prevYear = d2.is().january() ? d2.getFullYear() - 1 : d2.getFullYear();
    var prevMonth = d2.is().january() ? 11 : d2.getMonth() - 1;

    return Date.getDaysInMonth(prevYear, prevMonth) - d1.getDate() + d2.getDate();
}


