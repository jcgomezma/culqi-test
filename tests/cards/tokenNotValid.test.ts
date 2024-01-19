import axios from 'axios';

test('token expired', async () => {
	const token = 'lTaGf0NMAgvYOL4d';
	try {
		await axios.get(process.env.API_URL + '/cards', {
			headers: { Authorization: `Bearer ${ token }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('TOKEN_EXPIRED');
	}
});
