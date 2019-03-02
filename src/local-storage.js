export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken',authToken);
	} catch(e){
		///fails silently
	};
};

export const clearAuthToken = () => {
	try {
		localStorage.remove('authToken');
	} catch (e){
		//fails silently
	};
};