const formatDate = (uptime) => {
	const hours =  Math.floor(uptime / 3600);
	const restHours = uptime % 3600; //reszta do minut
	const restMinutes = restHours % 60; //reszta do sekund
	const minutes =  Math.floor(restHours / 60);
	const seconds =  Math.floor(restMinutes);
	let time = "";
	
	if (hours > 0) {
		time += `${hours}h`;
	}
	
	if (minutes > 0) {
		time += ` ${minutes}m`;
	}
	
	if (seconds > 0) {
		time += ` ${seconds}s`;
	}
	
	if (time === ""){
		time = "0s";
	}

	return `${time.trim()}`;
}

module.exports = formatDate;