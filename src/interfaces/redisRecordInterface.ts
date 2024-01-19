import { TokenInterface } from "./token.interface";
import { CardInterface } from "./card.interface";

export interface RedisRecordInterface {
	token: TokenInterface;
	data: CardInterface;
	business: string;
}
