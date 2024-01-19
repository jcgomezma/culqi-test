import { RedisService } from "../services/redis.service";
import { CryptoService } from "../services/crypto.service";
import { CardInterface } from "../interfaces/card.interface";
import { BAD_REQUEST } from "../utils/http.errors";


export class CardController {

	redisService: RedisService;
	cryptoService: CryptoService;

	constructor() {
		this.redisService = new RedisService();
		this.cryptoService = new CryptoService();
	}

	public get = async (token: string): Promise<CardInterface> => {
		const encrypted = await this.redisService.get(token);
		if (!encrypted) {
			throw BAD_REQUEST('TOKEN_NOT_VALID');
		}
		const decrypted = this.cryptoService.decrypt(encrypted);
		const redisRecord = JSON.parse(decrypted);
		const tokenExpirationDate = new Date(redisRecord.token.expirationDate);
		const now = new Date();
		if (tokenExpirationDate < now) {
			throw BAD_REQUEST('TOKEN_EXPIRED');
		}
		const { cvv, ...card } = redisRecord.data;
		return card;
	}

}
