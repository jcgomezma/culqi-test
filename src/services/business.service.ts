import { BusinessInterface } from "../interfaces/business.interface";
import { AppDataSource } from "../connections/pg.connection";
import { Business } from "../models/business";

export class BusinessService {

	constructor() {
	}

	public getByPK = async (pk: string): Promise<BusinessInterface> => {
		const db = await AppDataSource.initialize();
		const business = await db.getRepository(Business)
			.findOne({ where: { pk: pk } });
		await db.destroy();
		return business;
	}

}
