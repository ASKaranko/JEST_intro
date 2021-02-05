const axios = require('axios');
const Ajax = require('./async');

// мы не хотим нагружать сервер запросом через axios,
// поэтому создаем фейковый resolve от сервера
jest.mock('axios');

// instance Ajax не создаем, так как метод внутри него статический
describe('Ajax: echo', () => {
	test('should return value async', async () => {
		const result = await Ajax.echo('some data');
		expect(result).toBe('some data');
	});

	// по аналогии, если не пользуемся async await
	test('should return value with promise', () => {
		// return пишется, чтобы JEST знал, что мы ждем promise
		return Ajax.echo('some data')
				.then(data => {
					expect(data).toBe('some data');
				});
	});

	// обработка ошибок
	test('should catch error with promise', () => {
		return Ajax.echo()
				.catch(err => {
					expect(err).toBeInstanceOf(Error);
				});
	});

	test('should catch error with async', async () => {
		try {
			await Ajax.echo();
		} catch(err) {
			expect(err).toBeInstanceOf(Error);
			expect(err.message).toBe('error');
		}
	});

});

describe('Ajax: GET', () => {
	let response;
	let todos;

	beforeEach(() => {
		todos = [
			{
				id: 1,
				title: 'Todo 1',
				completed: false
			}
		];
		response = {
			data: {
				todos
			}
		}
	});

	test('should return data from backend', () => {
		axios.get.mockResolvedValue(response);

		return Ajax.get().then(data => {
			expect(data.todos).toEqual(todos);
		});
	});
});