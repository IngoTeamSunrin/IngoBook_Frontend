import * as cookie from 'cookie';

export const handle = async ({event,resolve}) => {

	const cookies = cookie.parse(event.request.headers.cookie || "");

	event.locals.user = cookies;

	if(!cookies.session_id) {
		event.locals.user.authenticated = false;
	} else {
		event.locals.user.authenticated = true;
	}

	const response = await resolve(event);
	return response;
}

export const getSession = (event) => {
	if (event.locals.user.session_id){
		return {
			user: JSON.stringify(event.locals.user)
		}
	}
	return{

	};
}