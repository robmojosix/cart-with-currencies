const apiKey = 'bad939602febb4c93217ea43c01eb126';
export const currencylayerUrl = 'http://www.apilayer.net';
export const currencylayerGet = '/api/live';
const accessQueryParam = `?access_key=${apiKey}`;
const supportedCurrencies = ['USD','GBP','AUD','CAD','MXN'];
const currenciesParam = `&currencies=${supportedCurrencies.join(',')}`;

// need adapter ontop of api
// secrect key needs to be more secret (exposed on client)
// Only doing this as teh brief asked for an ajax request
// In real app I would fetch on server
// or create an api on the server to query at real-time (If needs be)
export const currenciesUrl = `${currencylayerUrl}${currencylayerGet}${accessQueryParam}${currenciesParam}`;
