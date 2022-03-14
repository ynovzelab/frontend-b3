/* eslint-disable import/no-anonymous-default-export */
const apiUrl = "http://localhost:1337/api";
export default {
	register(payload) {
		return fetch(`${apiUrl}/auth/local/register`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then((res) => res.json());
	},
	login(payload) {
		return fetch(``, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then(res=>res.json())
	},
};
