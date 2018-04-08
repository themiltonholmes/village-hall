/**
 * This method will fetch the site contacts from public/data/contacts.json
 * Once it has it, it'll suck out the json and pass it into the success callback
 * 
 * @param {function} success the success function
 */
export const fetchContacts = (success) => {
    fetch(`${process.env.PUBLIC_URL}/data/contacts.json`)
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
    })
    .then(function(json) {
        success(json);
    })
}

/**
 * This method will fetch the hall users from public/data/hallUsers.json
 * Once it has it, it'll suck out the json and pass it into the success callback
 * 
 * @param {function} success the success function
 */
export const fetchUsers = (success) => {
    fetch(`${process.env.PUBLIC_URL}/data/hallUsers.json`)
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
    })
    .then(function(json) {
        success(json);
    })
}