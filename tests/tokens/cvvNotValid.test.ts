import axios from 'axios';

test('cvv not valid', async () => {
	const businessPK = 'pk_test_LsRBKejzCOEEWOsw';
	const payload = {
		email: "admin@gmail.com",
		card_number: "4242424242424242",
		cvv: "12345",
		expiration_year: "2028",
		expiration_month: "01"
	};
	try {
		await axios.post(process.env.API_URL + '/tokens', payload, {
			headers: { Authorization: `Bearer ${ businessPK }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('CVV_NOT_VALID');
	}
});
