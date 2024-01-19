import axios from 'axios';

test('card number not valid', async () => {
	const businessPK = 'pk_test_LsRBKejzCOEEWOsw';
	const payload = {
		email: "admin@gmail.com",
		card_number: "49927398716",
		cvv: "123",
		expiration_year: "2028",
		expiration_month: "01"
	};
	try {
		await axios.post(process.env.API_URL + '/tokens', payload, {
			headers: { Authorization: `Bearer ${ businessPK }` }
		});
	} catch (e) {
		expect(e?.response?.data?.message).toBe('CARD_NUMBER_NOT_VALID');
	}
});
