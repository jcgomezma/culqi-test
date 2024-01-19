import { TokenController } from "../controllers/token.controller";
import { TokenInterface } from "../interfaces/token.interface";
import { CREATED_RESPONSE, ERROR_RESPONSE } from "../utils/handler-responses";


module.exports.create = async (event: any) => {
	try {
		const businessPK = event?.headers?.Authorization?.replace('Bearer ', '');
		const controller = new TokenController();
		const payload = JSON.parse(event.body);
		const token: TokenInterface = await controller.create(businessPK, payload);
		return CREATED_RESPONSE({ token: token.token });
	} catch (error) {
		return ERROR_RESPONSE(error);
	}
}
