import axios from 'axios';

test('expiration year not valid', async () => {
	const businessPK = 'pk_test_LsRBKejzCOEEWOsw';
	const payload = {
		email: "admin@gmail.com",
		card_number: "4242424242424242",
		cvv: "123",
		expiration_year: "2020",
		expiration_month: "01"
	};
	try {
		await axios.post(process.env.API_URL + '/tokens', payload, {
			headers: { Authorization: `Bearer ${ businessPK }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('EXPIRATION_YEAR_NOT_VALID');
	}
});
