/**
 * Returns wordnik word of the day
 * @param {*} success 
 */
export const fetchWordOfTheDay = (success) => {
    fetch(`http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
	.then(function(response) {
		if (response.status >= 400) {
            console.error("Word of the day doesn't work anymore. Call the developer and tell him to take it out");
            return {};
		}
		return response.json();
    })
    .then(function(json) {
        success(json);
    })
}