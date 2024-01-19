import { CardInterface } from "../interfaces/card.interface";
import { BAD_REQUEST } from "../utils/http.errors";

export class CardValidatorService {

	constructor() {
	}

	public isValid = (data: CardInterface): boolean => {
		if (!this.validateEmail(data.email)) {
			throw BAD_REQUEST('EMAIL_NOT_VALID');
		}
		if (!this.validateCardNumber(data.card_number)) {
			throw BAD_REQUEST('CARD_NUMBER_NOT_VALID');
		}
		if (data.cvv && !this.validateCVV(data.cvv)) {
			throw BAD_REQUEST('CVV_NOT_VALID');
		}
		if (!this.validateExpirationMonth(data.expiration_month)) {
			throw BAD_REQUEST('EXPIRATION_MONTH_NOT_VALID');
		}
		if (!this.validateExpirationYear(data.expiration_year)) {
			throw BAD_REQUEST('EXPIRATION_YEAR_NOT_VALID');
		}
		return true;
	}

	private validateEmail = (email: string): boolean => {
		const expression: RegExp = /^[A-Z0-9._%+-]+@(gmail.com|hotmail.com|yahoo.es)$/i;
		return expression.test(email);
	}

	private validateCardNumber = (cardNumber: string): boolean => {
		let arr = (cardNumber + "")
			.split("")
			.reverse()
			.map((x) => parseInt(x));
		let lastDigit = arr.splice(0, 1)[0];
		let sum = arr.reduce(
			(acc, val, i) =>
				(i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9)
			, 0);
		sum += lastDigit;
		return sum % 10 === 0;
	}

	private validateCVV = (cvv: string): boolean => {
		if (!Number.isInteger(Number(cvv))) {
			return false;
		}
		return !!cvv && 3 <= cvv.length && cvv.length <= 4;
	}

	private validateExpirationMonth = (expirationMonth: string): boolean => {
		if (!Number.isInteger(Number(expirationMonth))) {
			return false;
		}
		const month = parseInt(expirationMonth);
		return 1 <= month && month <= 12;
	}

	private validateExpirationYear = (expirationYear: string): boolean => {
		if (!Number.isInteger(Number(expirationYear))) {
			return false;
		}
		const year = parseInt(expirationYear);
		const current = new Date().getFullYear()
		return current <= year && year <= current + 5;
	}

}
