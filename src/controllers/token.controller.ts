import { TokenService } from "../services/token.service";
import { CardValidatorService } from "../services/card-validator.service";
import { BusinessService } from "../services/business.service";
import { RedisService } from "../services/redis.service";
import { CryptoService } from "../services/crypto.service";
import { CardInterface } from "../interfaces/card.interface";
import { TokenInterface } from "../interfaces/token.interface";
import { RedisRecordInterface } from "../interfaces/redisRecordInterface";
import { BAD_REQUEST } from "../utils/http.errors";

export class TokenController {

	tokenService: TokenService;
	cardValidatorService: CardValidatorService;
	businessService: BusinessService;
	redisService: RedisService;
	cryptoService: CryptoService;

	constructor() {
		this.tokenService = new TokenService();
		this.cardValidatorService = new CardValidatorService();
		this.businessService = new BusinessService();
		this.redisService = new RedisService();
		this.cryptoService = new CryptoService();
	}

	public create = async (businessPK: string, data: CardInterface): Promise<TokenInterface> => {
		this.cardValidatorService.isValid(data);
		const business = await this.businessService.getByPK(businessPK);
		if (!business) {
			throw BAD_REQUEST('BUSINESS_NOT_FOUND');
		}
		const token = this.tokenService.create();
		const redisObject: RedisRecordInterface = { token, data, business: businessPK };
		const encrypted = this.cryptoService.encrypt(JSON.stringify(redisObject));
		await this.redisService.store(token.token, encrypted);
		return token;
	}

}
