import axios from 'axios';

test('expiration month not valid', async () => {
	const businessPK = 'pk_test_LsRBKejzCOEEWOsw';
	const payload = {
		email: "admin@gmail.com",
		card_number: "4242424242424242",
		cvv: "123",
		expiration_year: "2028",
		expiration_month: "12"
	};
	try {
		await axios.post(process.env.API_URL + '/tokens', payload, {
			headers: { Authorization: `Bearer ${ businessPK }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('EXPIRATION_MONTH_NOT_VALID');
	}
});
