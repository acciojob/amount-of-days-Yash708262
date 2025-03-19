function daysOfAYear(year) {
	 if (year < 1 || year > 9999) {
        return "Invalid input: Year must be between 1 and 9999.";
    }
	if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return 366;
	} else {
		return 365;
	}
}
