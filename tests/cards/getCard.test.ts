import axios from 'axios';

test('get card', async () => {
	const businessPK = 'pk_test_LsRBKejzCOEEWOsw';
	const payload = {
		email: "admin@gmail.com",
		card_number: "4242424242424242",
		cvv: "123",
		expiration_year: "2028",
		expiration_month: "01"
	};
	const tokenResponse = await axios.post(process.env.API_URL + '/tokens', payload, {
		headers: { Authorization: `Bearer ${ businessPK }` }
	});
	const token = tokenResponse?.data?.token;
	const cardResponse = await axios.get(process.env.API_URL + '/cards', {
		headers: { Authorization: `Bearer ${ token }` }
	});
	expect(tokenResponse.status === 201 && cardResponse.status === 200).toBeTruthy();
});
