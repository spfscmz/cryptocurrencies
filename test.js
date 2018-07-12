import test from 'ava';
import cryptocurrencies from '.';

test('produces a JSON object', t => {
	t.is(typeof cryptocurrencies, 'object');
	t.is(cryptocurrencies.BTC, 'Bitcoin');
});

test('.symbols', t => {
	const symbols = cryptocurrencies.symbols();
	t.is(Array.isArray(symbols), true);
	t.is(symbols.length, Object.keys(cryptocurrencies).length);
});

test('.names', t => {
	const names = cryptocurrencies.names();
	t.is(Array.isArray(names), true);
	t.is(names.length, Object.keys(cryptocurrencies).length);
})

test('nameToSymbol', t => {
	return cryptocurrencies.nameToSymbol('bitcoin')
	.then(symbol => t.is(symbol, 'BTC'))
	.catch(t.fail())
})

test('symbolToName', t => {
	return cryptocurrencies.symbolToName('bitcoin')
	.then(name => t.is(symbol, 'Bitcoin'))
	.catch(t.fail())
})