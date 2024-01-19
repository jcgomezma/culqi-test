import { CardController } from "../controllers/card.controller";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../utils/handler-responses";


module.exports.get = async (event: any) => {
	try {
		const token = event?.headers?.Authorization?.replace('Bearer ', '');
		const controller = new CardController();
		const card = await controller.get(token);
		return SUCCESS_RESPONSE({ card });
	} catch (error) {
		return ERROR_RESPONSE(error);
	}
}
