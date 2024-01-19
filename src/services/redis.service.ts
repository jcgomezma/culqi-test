import { createClient, RedisClientType } from 'redis';

export class RedisService {

	private host: string = process.env.REDIS_HOST;
	private port: string = process.env.REDIS_PORT;
	private user: string = process.env.REDIS_USER;
	private password: string = process.env.REDIS_PASSWORD;
	private client: RedisClientType;

	constructor() {
		const url = `redis://${ this.user }:${ this.password }@${ this.host }:${ this.port } `
		this.client = createClient({ url, legacyMode: false });
		this.client.on('error', err => console.log('Redis Client Error', err));
	}

	public store = async (key: any, value: any): Promise<boolean> => {
		await this.client.connect()
		await this.client.set(key, value);
		await this.client.disconnect();
		return true;
	}

	public get = async (key: any): Promise<string> => {
		await this.client.connect()
		const data = await this.client.get(key);
		await this.client.disconnect();
		return data;
	}

}
