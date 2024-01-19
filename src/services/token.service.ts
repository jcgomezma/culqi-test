import { TokenInterface } from "../interfaces/token.interface";

export class TokenService {

	private expirationMinutes = 1;

	constructor() {
	}

	public create = (): TokenInterface => {
		const token = this.generate();
		let expirationDate = new Date();
		expirationDate.setMinutes(expirationDate.getMinutes() + this.expirationMinutes);
		return { token, expirationDate };
	}

	private generate = (): string => {
		const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let token = '';
		const charactersLength = alphanumeric.length;
		for (let i = 0; i < 16; i++) {
			token += alphanumeric.charAt(Math.floor(Math.random() * charactersLength));
		}
		return token;
	}

}
