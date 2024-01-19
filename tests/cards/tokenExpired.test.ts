import axios from 'axios';

test('token not valid', async () => {
	const token = '123456789';
	try {
		await axios.get(process.env.API_URL + '/cards', {
			headers: { Authorization: `Bearer ${ token }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('TOKEN_NOT_VALID');
	}
});
