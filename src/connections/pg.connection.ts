import { DataSource } from "typeorm"
import { Business } from "../models/business";


export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.POSTGRESQL_HOST,
	port: Number(process.env.POSTGRESQL_PORT),
	username: process.env.POSTGRESQL_USERNAME,
	password: process.env.POSTGRESQL_PASSWORD,
	database: process.env.POSTGRESQL_DATABASE,
	synchronize: true,
	logging: false,
	entities: [Business],
	migrations: [],
	subscribers: [],
})
