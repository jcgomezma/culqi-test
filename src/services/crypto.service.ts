import { createCipheriv, createDecipheriv } from 'crypto';

export class CryptoService {

	private key = process.env.CRYPTO_KEY;
	private iv = process.env.CRYPTO_IV;
	private algorithm = 'aes-256-cbc';

	constructor() {
	}

	public encrypt = (txt: string): string => {
		const cipher = createCipheriv(this.algorithm, Buffer.from(this.key), Buffer.from(this.iv));
		let encrypted = cipher.update(txt, 'utf8', 'hex');
		encrypted += cipher.final('hex');
		return encrypted;
	}

	public decrypt = (txt: string): string => {
		const decipher = createDecipheriv(this.algorithm, Buffer.from(this.key), Buffer.from(this.iv));
		let decrypted = decipher.update(txt, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	}

}
